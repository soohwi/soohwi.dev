/**
 * components/sections
 * project/ProjectCardModal.tsx
**/

import styles from './project.module.scss';
import { ProjectItem } from 'data/projectData';
import { ProjectDetail } from 'data/projectDetailData';

interface ProjectCardModalProps {
  item: ProjectItem;
  detail?: ProjectDetail;
}

function ProjectCardModal({ item, detail }: ProjectCardModalProps) {
  return (
    <div className={styles.modalDetail}>
      {/* 기본정보 */}
      <p className={styles.modalCompany}>{item.comp}</p>
      <p className={styles.modalPeriod}>{item.period}</p>
      <p className={styles.modalSkill}>{item.skill}</p>

      {/* 이슈사항 */}
      {detail?.problem && detail.problem.length > 0 && (
        <section className={styles.modalSection}>
          <h4 className={styles.modalSubTitle}>실무에서 겪은 문제</h4>
          <ul className={styles.modalList}>
            {detail.problem?.map((text, idx) => (
              <li key={`problem-${idx}`}>{text}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 개선 */}
      {detail?.solution && detail.solution.length > 0 && (
        <section className={styles.modalSection}>
          <h4 className={styles.modalSubTitle}>내가 했던 개선</h4>
          <ul className={styles.modalList}>
            {detail.solution.map((text, idx) => (
              <li key={`solution-${idx}`}>{text}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 회고 */}
      {detail?.reflection && detail.reflection.length > 0 && (
        <section className={styles.modalSection}>
          <h4 className={styles.modalSubTitle}>회고</h4>
          <ul className={styles.modalList}>
            {detail.reflection.map((text, idx) => (
              <li key={`reflection-${idx}`}>{text}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default ProjectCardModal;