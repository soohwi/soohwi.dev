/**
 * data
 * skillsData.ts
**/

type Skill = {
  name: string;
  isLearning?: boolean;
}

type CompetencySeg = {
  text: string;
  bold?: boolean;
}

export interface SkillsItem {
  id: string;
  title?: string;
  skills?: Skill[];
  isCompetency?: boolean;
  compList?: CompetencySeg[][];
}

export const skillsData: SkillsItem[] = [
  {
    id: 'Frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SCSS(SASS)' },
      { name: 'JavaScript' },
      { name: 'TypeScript', isLearning: true }
    ]
  },
  {
    id: 'Framework',
    title: 'Framework / Library',
    skills: [
      { name: 'Vue.js' },
      { name: 'React.js', isLearning: true }
    ]
  },
  {
    id: 'Tools',
    title: 'Tools',
    skills: [
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Figma' },
      { name: 'Adobe XD' }
    ]
  },
  {
    id: 'Competency',
    isCompetency: true,
    compList: [
      [
        { text: 'UI/UX 구현 및 구조 개선 ', bold: true },
        { text: '경험 (대형 HR·이커머스 플랫폼 중심)' }
      ],
      [
        { text: 'Vue.js 기반 컴포넌트 설계로 ' },
        { text: '재사용성과 유지보수성 향상', bold: true }
      ],
      [
        { text: 'JavaScript 기반 비동기 처리 및 렌더링 최적화 경험' }
      ],
      [
        { text: '기획/디자인/백엔드와의 ' },
        { text: '협업을 통한 커뮤니케이션 및 문제 해결 ', bold: true },
        { text: '능력' }
      ],
      [
        { text: 'React.js와 TypeScript 학습을 통한 ' },
        { text: '컴포넌트 설계 ', bold: true },
        { text: '및 실무 적용 역량 강화 중' }
      ]
    ]
  }
]