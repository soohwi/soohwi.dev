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
  // const [selectedProject, setSelectedProject] = useState<null | ProjectItem>(null);
  const detailMap = new Map(ProjectDetailData.map(item => [item.id, item]));

  // 슬라이더 이전/다음 컨트롤러
  const handleControl = (dir: 'prev' | 'next') => {
    const scrollAmount = 310 + 20; // 카드 1개 너비 + 여백

    cardListRef.current?.scrollBy({
      left: dir === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  // 탭 선택에 맞는 리스트 필터링
  const filteredProject =
    selectedTab === 'All'
      ? ProjectData
      : ProjectData.filter((item) => item.comp === selectedTab);

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
            <li><button type="button" onClick={() => handleControl('prev')} aria-label="이전"><i className={styles.icon}></i></button></li>
            <li><button type="button" onClick={() => handleControl('next')} aria-label="다음"><i className={styles.icon}></i></button></li>
          </ul>
        </div>
      </div>
      {/*// 슬라이더 컨트롤러 */}

      {/* 모달 */}
      <CommonModal
        isOpen={isOpen}
        onClose={close}
        modalTitle={selectedProject?.title}
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