/**
 * components/layout
 * Header.tsx
**/

import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const $home = document.querySelector('#home');
      if (!$home) return;

      if ($home instanceof HTMLElement) {
        const homeHeight = $home.offsetHeight - 120;

        // home 영역 지나면 header show
        if (scrollY > homeHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={clsx(
      styles.header,
      isVisible ? styles.show : ''
    )}>
      <div className={clsx(styles.headerInner, 'hwiInner')}>
        <h1 className={styles.logo}><i className={styles.logoIcon}></i><span className={styles.logoTitle}>SOOHWI.DEV</span></h1>

        {/* 일반 GNB (데스크탑용) */}
        <nav className={styles.gnb}>
          <ul className={styles.gnbList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#career">Career</a></li>
          </ul>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button className={clsx(styles.mobileMenuBtn, isMenuOpen && styles.menuOpen)} onClick={toggleMenu}><span /><span /><span /></button>

        {/* 모바일 메뉴 */}
        <nav className={clsx(styles.mobileMenu, isMenuOpen && styles.menuOpen)}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#project" onClick={closeMenu}>Project</a></li>
            <li><a href="#career" onClick={closeMenu}>Career</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;