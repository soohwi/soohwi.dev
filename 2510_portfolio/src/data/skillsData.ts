/**
 * data
 * skillsData.ts
**/

export interface SkillsItem {
  id: string;
  title: string;
  skills: string[];
}

export const skillsData: SkillsItem[] = [
  {
    id: 'Frontend',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'SCSS(SASS)', 'JavaScript', 'TypeScript*']
  },
  {
    id: 'Framework',
    title: 'Framework / Library',
    skills: ['Vue.js', 'React.js*']
  },
  {
    id: 'Tools',
    title: 'Tools',
    skills: ['VS Code', 'Git', 'GitLab', 'Figma', 'Adobe XD']
  }
]