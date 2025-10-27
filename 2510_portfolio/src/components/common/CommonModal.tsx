/**
 * components/common
 * CommonModal.tsx
**/

import styles from './commonModal.module.scss';
import { ReactNode, useEffect } from 'react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string;
  children: ReactNode;
}

function CommonModal({ isOpen, onClose, modalTitle, children }: CommonModalProps) {
  // dim 클릭 시 모달 닫기
  const handleDimClick = () => {
    onClose();
  };

  // 이벤트 버블링 막기
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // ESC로 모달 닫기
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // 모달 열림
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.commonModalWrap} onClick={handleDimClick} role="dialog" aria-modal="true">
      <div className={styles.commonModal} onClick={handleModalClick}>
        <div className={styles.commonModalInner}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{modalTitle}</h3>
            <button
              type="button"
              className={styles.modalBtnClose}
              onClick={onClose}
              aria-label="모달 닫기"
            ><i className={styles.icon}></i></button>
          </div>
          <div className={styles.modalBody}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonModal;