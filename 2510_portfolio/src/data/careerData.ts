/**
 * data
 * careerData.ts
**/

export interface ItemSummaryPart {
  text: string;
  bold: boolean;
}

export interface CareerItem {
  id: string;
  company: string;
  logo: string;
  team: string;
  role: string;
  position: string;
  period: string;
  summary: ItemSummaryPart[][];
  projects: string;
  skills: string[];
}

export const careerData: CareerItem[] = [
  {
    id: 'hcg',
    company: '(주) 휴먼컨설팅그룹',
    logo: 'hcg',
    team: 'UX Team',
    role: '프론트엔드 개발',
    position: '선임',
    period: '2021.11 - 재직 중',
    summary: [
      [
        { text: 'Vue.js 기반 HR 플랫폼의 UI 및 컴포넌트 구조를 설계 및 구현', bold: true },
        { text: '하여 재사용성과 유지보수성 30% 향상', bold: false }
      ],
      [
        { text: 'Figma 기반 협업 및 ', bold: false },
        { text: '개발자 가이드 문서화', bold: true },
        { text: '로 디자이너·개발자 간 협업 효율 15% 개선', bold: false }
      ]
    ],
    projects: 'GS칼텍스 통합 HR 플랫폼, SK바이오사이언스 HR 서비스, HR 서비스 고도화',
    skills: ['Vue.js', 'JavaScript(ES6+)', 'SCSS(SASS)', 'HTML5', 'Figma'],
  },
  {
    id: 'mm',
    company: '(주) 엠몬스타',
    logo: 'mm',
    team: 'Publisher Team',
    role: '웹 퍼블리셔',
    position: '매니저',
    period: '2018.07 - 2023.01 (4년 6개월)',
    summary: [
      [
        { text: '반응형 웹 구축 및 UI/UX 개선 중심', bold: true },
        { text: '으로 대형 브랜드몰 리뉴얼 다수 수행', bold: false }
      ],
      [
        { text: 'SCSS 및 JavaScript 기반 공통 모듈 설계', bold: true },
        { text: '로 개발 효율성 향상 및 유지보수 체계 개선', bold: false }
      ]
    ],
    projects: '내셔널지오그래픽몰 리뉴얼, HAGO 쇼핑몰 리뉴얼, 패션플러스 리뉴얼, 자사 솔루션 구축',
    skills: ['JavaScript', 'jQuery', 'SCSS(SASS)', 'HTML5', 'Adobe XD'],
  }
];
