/**
 * components/sections
 * skills/Skills.tsx
**/

import styles from './skills.module.scss';
import { skillsData } from 'data/skillsData';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="hwiInner">
        <div className={styles.skillsBox}>
          <div className={styles.skillsInner}>
            <h3 className="hwiTitle">What I Do Best</h3>
            <p className={styles.skillsSub}>Skills & Competencies <span>(보유 기술 및 역량)</span></p>
            {/* Skills & Competencies, 보유 기술 및 역량 */}

            <div className={styles.skillsList}>
              <div className={styles.skillsItem}>
                <ul className={styles.skillsDetail}>
                  {skillsData.map((item) => (
                    <li key={item.id}>
                      <h5 className={styles.textTitle}>{item.title}</h5>
                      <ul className="badgeList">
                        {item.skills.map((skill, idx) => (
                          <li className="badge" key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <span className={styles.textRefer}>* 현재 학습 및 실무 역량 강화 중</span>
              </div>
              <div className={styles.skillsItem}>
                <h5 className={styles.textTitle}>핵심역량</h5>
                <ul className={styles.textList}>
                  <li>UI/UX 구현 및 구조 개선 경험 (대형 HR·이커머스 플랫폼 중심)</li>
                  <li>Vue.js 기반 컴포넌트 설계로 재사용성과 유지보수성 향상</li>
                  <li>JavaScript(ES6+) 기반 비동기 처리 및 렌더링 최적화 경험</li>
                  <li>기획/디자인/백엔드와의 협업을 통한 커뮤니케이션 및 문제 해결 능력</li>
                  <li>React.js와 TypeScript 학습을 통한 컴포넌트 설계 및 실무 적용 역량 강화 중</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;