/**
 * components/layout
 * Body.tsx
**/

import Home from 'sections/home/Home';
import Skills from 'sections/skills/Skills';
import Projects from 'sections/projects/Projects';
import Career from 'sections/career/Career';
import styles from './body.module.scss';

function Body() {
  return (
    <div id="body" className={styles.page}>
      <div className={styles.pageContent}>
        <Home />
        <Skills />
        <Projects />
        <Career />
      </div>
    </div>
  )
}

export default Body;