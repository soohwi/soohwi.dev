/**
 * components/sections
 * projects/ProjectsList.tsx
**/

import styles from './projects.module.scss';
import ProjectsCard from './ProjectsCard';
import { ProjectsData } from 'data/projectsData';
import { useRef } from 'react';

interface projectsListProps {
  selectedTab: string;
}

function ProjectsList({ selectedTab }: projectsListProps) {
  const cardListRef = useRef<HTMLDivElement>(null);// DOM 요소에 접근하기 위한 ref 선언 (이 ref를 통해 scrollBy 등 스크롤 제어 가능)

  // 슬라이더 이전/다음 컨트롤러
  const handleControl = (dir: 'prev' | 'next') => {
    const scrollAmount = 310 + 20; // 카드 1개 너비 + 여백

    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: dir === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  };

  // 탭 선택에 맞는 리스트 필터링
  const filteredProjects = selectedTab === 'All'
    ? ProjectsData
    : ProjectsData.filter((item) => item.comp === selectedTab);

  return (
    <div className={styles.projectsSlider}>
      <div className={styles.projectsCardList} ref={cardListRef} role="list">
        {filteredProjects.map((project) => (
          <ProjectsCard key={project.id} item={project}/>
        ))}
      </div>
      <div className="hwiInner">
        <div className={styles.projectsControl}>
          <ul>
            <li><button type="button" onClick={() => handleControl('prev')} aria-label="이전"><i className={styles.icon}></i></button></li>
            <li><button type="button" onClick={() => handleControl('next')} aria-label="다음"><i className={styles.icon}></i></button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList;