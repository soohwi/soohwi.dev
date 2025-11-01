/**
 * components/sections
 * project/ProjectList.tsx
**/

import styles from './project.module.scss';
import { useEffect, useRef, useState } from 'react';
import { ProjectData, ProjectItem } from 'data/projectData';
import { ProjectDetailData } from 'data/projectDetailData';
import ProjectCard from './ProjectCard';
import ProjectCardModal from './ProjectCardModal';
import CommonModal from 'common/CommonModal';
import { useModal } from 'hooks/useModal';

interface projectListProps {
  selectedTab: string;
}

function ProjectList({ selectedTab }: projectListProps) {
  const cardListRef = useRef<HTMLDivElement>(null);// DOM 요소에 접근하기 위한 ref 선언 (이 ref를 통해 scrollBy 등 스크롤 제어 가능)
  const { isOpen, data: selectedProject, open, close, setData } = useModal<ProjectItem>();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const detailMap = new Map(ProjectDetailData.map(item => [item.id, item]));

  // 슬라이더 이전/다음 컨트롤러
  const handleControl = (dir: 'prev' | 'next') => {
    const scrollAmount = 310 + 20; // 카드 1개 너비 + 여백

    cardListRef.current?.scrollBy({
      left: dir === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  // 슬라이더 컨트롤러 disabled 여부
  const checkSliderScroll = () => {
    const container = cardListRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);// -1 : 오차방지
  };

  useEffect(() => {
    const container = cardListRef.current;
    if (!container) return;

    // 최초에 1번 체크
    checkSliderScroll();

    // 스크롤 및 리사이즈 이벤트 등록
    container.addEventListener('scroll', checkSliderScroll);
    window.addEventListener('resize', checkSliderScroll);

    // 클린업
    return () => {
      container.removeEventListener('scroll', checkSliderScroll);
      window.removeEventListener('resize', checkSliderScroll);
    }
  }, []);


  // 탭 선택에 맞는 리스트 필터링
  const filteredProject =
    selectedTab === 'All'
      ? ProjectData
      : ProjectData.filter((item) => item.comp === selectedTab);

  // 탭 필터링 시 슬라이더 컨트롤러 확인
  useEffect(() => {
    const timer = setTimeout(() => {
      checkSliderScroll();
    }, 10);// DOM 업데이트 끝난 후 실행을 위해

    return () => clearTimeout(timer);
  }, [selectedTab])

  // 모달 닫기 (애니메이션 후 데이터 삭제)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setData(null), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, setData]);

  return (
    <div className={styles.projectSlider}>
      {/* 카드리스트 */}
      <div className={styles.projectCardList} ref={cardListRef} role="list">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            item={project}
            onClick={() => open(project)}
          />
        ))}
      </div>
      {/*-- 카드리스트 */}

      {/* 슬라이더 컨트롤러 */}
      <div className="hwiInner">
        <div className={styles.projectControl}>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => handleControl('prev')}
                aria-label="이전"
                disabled={!canScrollPrev}
              >
                <i className={styles.icon}></i>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleControl('next')}
                aria-label="다음"
                disabled={!canScrollNext}
              >
                <i className={styles.icon}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/*// 슬라이더 컨트롤러 */}

      {/* 모달 */}
      <CommonModal
        isOpen={isOpen}
        onClose={close}
        modalTitle={selectedProject?.comp}
        >
        {selectedProject &&
          <ProjectCardModal
            item={selectedProject}
            detail={detailMap.get(selectedProject.id)}
          />}
      </CommonModal>
      {/*-- 모달 */}
    </div>
  )
}

export default ProjectList;