/**
 * components/sections
 * projects/ProjectsTab.tsx
**/

import styles from './projects.module.scss';
import { useState } from 'react';
import { ProjectsData } from 'data/projectsData';

interface tabProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;// void=반환값없음
}

const tabs = ['All', '개인', '(주)휴먼컨설팅그룹', '(주)엠몬스타']

// 각 탭별 개수 계산
const tabItemCount = tabs.map((tab) => {
  if (tab === 'All') return ProjectsData.length;
  return ProjectsData.filter((item) => item.comp === tab).length;
});

// 2자릿수 포매팅
const formatCount = (count: number) => String(count).padStart(2, '0');

function ProjectsTab({ selectedTab, setSelectedTab }: tabProps) {
  return (
    <div className={styles.projectsTab}>
      <ul role="tablist">
        {tabs.map((tab, i) => (
          <li key={tab}>
            <button
              type="button"
              className={tab === selectedTab ? styles.tabOn : ''}
              role="tab"
              aria-selected={tab === selectedTab}
              aria-label={`${tab} 프로젝트 ${tabItemCount[i]}건`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
              <span
                className={styles.tabItemNum}
                aria-hidden="true"
              >
                {formatCount(tabItemCount[i])}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsTab;