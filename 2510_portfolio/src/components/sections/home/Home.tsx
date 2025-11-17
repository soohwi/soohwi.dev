/**
 * components/sections
 * home/Home.tsx
**/

import { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Moon from 'components/threejs/Moon';
import styles from './home.module.scss';
import clsx from 'clsx';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isTitleFixed, setIsTitleFixed] = useState(false);
  const [titleOffset, setTitleOffset] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // 모바일인지 체크
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 페이지 진입 후 100ms 후 애니메이션 트리거
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  // 별 배경 마우스위치에 따른 움직임 이벤트
  useEffect(() => {
    const stars = document.querySelectorAll('[data-star]');
    const handleMouseMove = (e: MouseEvent) => {
      const {innerWidth, innerHeight} = window;

      // 마우스가 중심에서 얼마나 벗어났는지
      const offsetX = (e.clientX - innerWidth / 2) / 30;
      const offsetY = (e.clientY - innerHeight / 2) / 30;

      stars.forEach((star, i) => {
        if (!(star instanceof HTMLElement)) return;// HTMLElement만 처리하여 타입 안정성 확보

        const speed = (i % 5 + 1) * 0.4;// 별마다 속도 다르게 주기
        star.style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 스크롤에 따른 타이틀 및 컨텐츠 애니메이션

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeSection = document.getElementById('home');

      if (!homeSection) return;

      // 타이틀 움직임 범위
      setTitleOffset(Math.min(scrollY * 0.6));

      // home 위치값
      const homeTop = homeSection.offsetTop;
      const homeHeight = homeSection.offsetHeight;
      const homeBottom = homeTop + homeHeight;
      const scrollMiddle = scrollY + window.innerHeight / 2;

      // title 숨기기
      setHideTitle(scrollMiddle >= (homeTop + 800));

      // home 영역의 중간에 오면 content 보이게
      setShowContent(scrollMiddle >= homeTop + 700);

      // fixed 여부
      setIsTitleFixed(scrollY < homeBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 다크모드 테마 적용
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = saved || 'light';

    document.documentElement.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleThemeToggle = () => {
    const changeTheme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', changeTheme);
    localStorage.setItem('theme', changeTheme);

    setTheme(changeTheme);
  };

  return (
    <section id="home" className={styles.home}>
      <button
        className={clsx(styles.themeToggle)}
        aria-label="다크모드 토글"
        onClick={handleThemeToggle}
      >
        <i className={styles.icon}></i>
      </button>
      <div className={clsx(styles.homeInner, !isTitleFixed && styles.typeAbsolute)}>
        {/* 배경 (별/달) */}
        <div className={styles.homeVisual}>
          <div className={styles.moonBox}>
            <p className={styles.moonInfo}><i className={styles.icon}></i>드래그로 달을 움직여 보세요 !</p>
            <Canvas
              style={{ position: "absolute", top: 0, left: 0 }}
              camera={{ position: [0, 0, 5], fov: 60 }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Moon />
              {!isMobile && (
                <OrbitControls enableZoom={false} enablePan={false} />
              )}
              <Stars radius={100} depth={50} count={500} factor={4} fade />
            </Canvas>
          </div>
          <div className={styles.starsBox}>
            {Array.from({length: 150}).map((_, i) => (
              <div className={styles.star}
                key={i}
                data-star
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                }}
              />
            ))}
          </div>
        </div>
        {/* //배경 (별/달) */}

        {/* 타이틀 */}
        <div className={clsx(styles.homeTitleBox, showTitle && !hideTitle && styles.visible)}>
          <div className={clsx(styles.homeTitle, styles.typeSolid)}>
            <p className={styles.text} style={{ transform: `translate3d(${titleOffset}px, 0, 0)` }}>PARK<br/> SOO HWI</p>
            <p className={styles.text} style={{ transform: `translate3d(-${titleOffset}px, 0, 0)` }}>FRONTEND</p>
          </div>
          <div className={clsx(styles.homeTitle, styles.typeBorder)}>
            <p className={styles.text} style={{ transform: `translate3d(${titleOffset}px, 0, 0)` }}>PARK<br/> SOO HWI</p>
            <p className={styles.text} style={{ transform: `translate3d(-${titleOffset}px, 0, 0)` }}>FRONTEND</p>
          </div>
        </div>
        {/* //타이틀 */}

        {/* 컨텐츠 */}
        <div className={clsx(styles.homeContent, showContent && styles.visible)}>
          <div className={styles.homeContentInner}>
            <p>5년 이상의 퍼블리싱 경험을 바탕으로, <strong>UI 완성도와 협업에 강점</strong>을 가진 JavaScript 기반 프론트엔드 개발자 박수휘입니다.</p>
            <p>웹 퍼블리셔로 출발해 <strong>Vue.js 기반의 컴포넌트 개발 경험</strong>을 쌓으며 프론트엔드로 전향했습니다.</p>
            <p><strong>현재는 React.js와 TypeScript로 기술 영역</strong>을 확장하며 컴포넌트 구조와 상태 관리 패턴을 익히고 있습니다.</p>
            <p>사용자 중심의 UI를 구조적으로 설계하고 개선하는 데 강점이 있습니다.</p>
          </div>
        </div>
        {/* //컨텐츠 */}
      </div>
    </section>
  )
}

export default Home;