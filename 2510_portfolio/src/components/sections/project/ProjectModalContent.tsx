/**
 * components/sections
 * project/ProjectModalContent.tsx
**/

import styles from './project.module.scss';

interface ProjectCardItem {
  id: string;
  imgSrc: string;
  comp: string;
  title: string;
  period?: string;
  position?: string;
  skill: string;
}

function ProjectModalContent({ item }: { item: ProjectCardItem }) {
  return (
    <div className={styles.modalDetail}>
      {/* <h4 className={styles.modalTitle}>{item.title}</h4> */}
      <p className={styles.modalCompany}>{item.comp}</p>
      <p className={styles.modalPeriod}>{item.period}</p>
      <p className={styles.modalSkill}>{item.skill}</p>
      {/* 추가 정보 삽입 가능 */}
    </div>
  );
}

export default ProjectModalContent;