/**
 * components/sections
 * project/ProjectCard.tsx
**/

import { ProjectItem } from 'data/projectData';
import styles from './project.module.scss';
import clsx from 'clsx';

interface ProjectCardProps {
  item: ProjectItem;
  onClick: () => void;
}

function ProjectCard({ item, onClick }: ProjectCardProps) {
  return (
    <div className={styles.cardItem} role="listitem">
      <button type="button" aria-label={`${item.title} 자세히 보기`} onClick={onClick}>
        {item.position?.includes('Project Leader') && (
          <span className={styles.badgePL} aria-label="Project Leader">PL</span>
        )}
        <figure>
          <div className={styles.thumb}>
            <img src={item.imgSrc} alt={item.title} />
          </div>
          <figcaption>
            <p className={styles.textComp}>{item.comp}</p>
            <p className={styles.textTitle}>{item.title}</p>
            <ul className={styles.badgeSkill}>
              {item.skill.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </figcaption>
        </figure>
        <span className={styles.btnDetail} aria-label="자세히 보기"><i className={styles.icon}></i></span>
      </button>
    </div>
  )
}

export default ProjectCard;