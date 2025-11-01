/**
 * components/common
 * CommonModal.tsx
**/

import styles from './commonModal.module.scss';
import { ReactNode, useEffect, useState } from 'react';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string;
  children: ReactNode;
}

function CommonModal({ isOpen, onClose, modalTitle, children }: CommonModalProps) {
  const [isMounted, setIsMounted] = useState(false);// 모달 DOM에 존재 여부
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // ESC로 모달 닫기
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      setIsMounted(true);// DOM 생성
      setTimeout(() => setIsVisible(true), 10);// 클래스 나중에 추가하여 transition 주기

      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      setIsVisible(false);// 클래스 삭제
      // setIsMounted(false);// 클래스 삭제
      timeout = setTimeout(() => setIsMounted(false), 300);// 모달 안 데이터값이 먼저 사라지는걸 막기위해

      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className={`${styles.commonModalWrap} ${isVisible ? styles.open : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.commonModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.commonModalInner}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{modalTitle}</h3>
            <button
              type="button"
              className={styles.modalBtnClose}
              onClick={onClose}
              aria-label="모달 닫기"
            >
              <i className={styles.icon}></i>
            </button>
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