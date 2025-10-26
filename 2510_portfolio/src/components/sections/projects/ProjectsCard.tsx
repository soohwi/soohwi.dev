/**
 * components/sections
 * projects/ProjectsCard.tsx
**/

import styles from './projects.module.scss';

interface ProjectCardItem {
  id: string;
  imgSrc: string;
  comp: string;
  title: string;
  period?: string;
  position?: string;
  skill: string;
}

function ProjectsCard({item}: {item: ProjectCardItem}) {
  return (
    <div className={styles.cardItem} role="listitem">
      <button type="button" aria-label={`${item.title} 자세히 보기`}>
        <figure>
          <div className={styles.thumb}>
            <img src={item.imgSrc} alt={item.title} />
          </div>
          <figcaption>
            <p className={styles.textComp}>{item.comp}</p>
            <p className={styles.textTitle}>{item.title}</p>
            <p className={styles.textPeriod}>{item.period}</p>
            <p className={styles.textPosition}>{item.position}</p>
            <p className={styles.textSkill}>{item.skill}</p>
          </figcaption>
        </figure>
        <span className={styles.btnDetail} aria-label="자세히 보기"><i className={styles.icon}></i></span>
      </button>
    </div>
  )
}

export default ProjectsCard;