/**
 * components/sections
 * skills/SkillsList.tsx
**/

import styles from './skills.module.scss';
import { skillsData } from 'data/skillsData';

function SkillsList() {
  return (
    <div className={styles.skillsList}>
      {skillsData.map((item) => {
        // 핵심역량
        if (item.isCompetency) {
          return (
            <div className={styles.skillsItem} key={item.id}>
              <ul className={styles.skillsComp}>
                {item.compList?.map((line, i) => (
                  <li key={i}>
                    {line.map((segment, segIdx) =>
                      segment.bold ? (
                        <strong key={segIdx}>{segment.text}</strong>
                      ) :  (
                        <span key={segIdx}>{segment.text}</span>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // 보유기술
        const hasLearning = item.skills?.some(skill => skill.isLearning);

        return (
          <div className={styles.skillsItem} key={item.id}>
            <h5 className={styles.textTitle}>{item.title}</h5>
            <ul className="badgeList">
              {item.skills?.map(skill => (
                <li className="badge" key={skill.name}>
                  {skill.name}
                  {skill.isLearning && <span className="badgeMark">*</span>}
                </li>
              ))}
            </ul>
            {hasLearning && <span className={styles.textRefer}><span className="badgeMark">*</span> 현재 학습 및 실무 역량 강화 중</span>}
          </div>
        );
      })}
    </div>
  )
}

export default SkillsList;