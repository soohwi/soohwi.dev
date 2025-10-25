/**
 * components/sections
 * home/Home.tsx
**/

import styles from './home.module.scss';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className="hwiInner">
        <h3 className={styles.homeTitle}>
          <a href="">Hello, I'm Hwi.</a>
        </h3>
        <div className={styles.homeInner}>
          <p>5년 이상의 퍼블리싱 경험을 바탕으로, UI 완성도와 협업에 강점을 가진 JavaScript 기반 프론트엔드 개발자 박수휘입니다.</p>
          <p>웹 퍼블리셔로 출발해 Vue.js 기반의 컴포넌트 개발 경험을 쌓으며 프론트엔드로 전향했습니다.</p>
          <p>현재는 React.js와 TypeScript로 기술 영역을 확장하며 컴포넌트 구조와 상태 관리 패턴을 익히고 있습니다.</p>
          <p>사용자 중심의 UI를 구조적으로 설계하고 개선하는 데 강점이 있습니다.</p>
        </div>
      </div>
    </section>
  )
}

export default Home;