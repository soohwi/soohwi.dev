/**
 * components/layout
 * Body.tsx
**/

import Home from 'sections/home/Home';
import Skills from 'sections/skills/Skills';
import Project from 'sections/project/Project';
import Career from 'sections/career/Career';
import styles from './body.module.scss';

function Body() {
  return (
    <div id="body" className={styles.page}>
      <div className={styles.pageContent}>
        <Home />
        <Skills />
        <Project />
        <Career />
      </div>
    </div>
  )
}

export default Body;