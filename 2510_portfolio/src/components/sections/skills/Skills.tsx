/**
 * components/sections
 * skills/Skills.tsx
**/

import styles from './skills.module.scss';
import SkillsList from './SkillsList';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="hwiInner">
        <div className={styles.skillsBox}>
          <div className={styles.skillsInner}>
            <h3 className="hwiTitle">&#60;What I Do Best &#47;&#62;</h3>
            <p className={styles.skillsSub}>Skills & Competencies</p>
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;