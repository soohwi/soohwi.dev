/**
 * components/sections
 * projects/Projects.tsx
**/

import styles from './projects.module.scss';
import { useState } from 'react';
import ProjectsList from './ProjectsList';
import ProjectsTab from './ProjectsTab';

function Projects() {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <section id="projects" className={styles.projects}>
      <div className="hwiInner">
        <h3 className="hwiTitle">&#60;Projects &#47;&#62;</h3>
        <ProjectsTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      <ProjectsList selectedTab={selectedTab} />
    </section>
  )
}

export default Projects;