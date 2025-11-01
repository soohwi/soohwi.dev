/**
 * components/sections
 * project/ProjectCard.tsx
**/

import styles from './project.module.scss';
import { ProjectItem } from 'data/projectData';

interface ProjectCardProps {
  item: ProjectItem;
  onClick: () => void;
}

function ProjectCard({ item, onClick }: ProjectCardProps) {
  return (
    <div className={styles.cardItem} role="listitem">
      <button type="button" aria-label={`${item.title} 자세히 보기`} onClick={onClick}>
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

export default ProjectCard;