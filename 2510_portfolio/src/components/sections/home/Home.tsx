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
  // 별 배경 마우스위치에 따른 움직임 이벤트
  useEffect(() => {
    const stars = document.querySelectorAll('[data-star]');

    const handleMouseMove = (e: MouseEvent) => {
      const {innerWidth, innerHeight} = window;

      // 마우스가 중심에서 얼마나 벗어났는지
      const offsetX = (e.clientX - innerWidth / 2) / 30;
      const offsetY = (e.clientY - innerHeight / 2) / 30;

      stars.forEach((star, i) => {
        const speed = (i % 5 + 1) * 0.4;// 별마다 속도 다르게 주기
        (star as HTMLElement).style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이지 진입 후 100ms 후 애니메이션 트리거
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className={styles.home}>
      {/* <div className={clsx('hwiInner', styles.homeInner)}>
        <h3 className={clsx(styles.homeTitle, isVisible && styles.visible)}>
          <span>Hello,</span><span>I'm Hwi.</span>
        </h3>
        <div className={clsx(styles.homeContent, isVisible && styles.visible)}>
          <p>5년 이상의 퍼블리싱 경험을 바탕으로, UI 완성도와 협업에 강점을 가진 JavaScript 기반 프론트엔드 개발자 박수휘입니다.</p>
          <p>웹 퍼블리셔로 출발해 Vue.js 기반의 컴포넌트 개발 경험을 쌓으며 프론트엔드로 전향했습니다.</p>
          <p>현재는 React.js와 TypeScript로 기술 영역을 확장하며 컴포넌트 구조와 상태 관리 패턴을 익히고 있습니다.</p>
          <p>사용자 중심의 UI를 구조적으로 설계하고 개선하는 데 강점이 있습니다.</p>
        </div>
      </div> */}
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
            <OrbitControls enableZoom={false} enablePan={false} />
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
    </section>
  )
}

export default Home;