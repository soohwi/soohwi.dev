/**
 * components/layout
 * Header.tsx
**/

import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const $home = document.querySelector('#home');

      if (!$home) return;

      const homeHeight = $home.offsetHeight - 120;

      // home 영역 지나면 header show
      if (scrollY > homeHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={clsx(
      styles.header,
      isVisible ? styles.show : ''
    )}>
      <div className={clsx(styles.headerInner, 'hwiInner')}>
        <h1 className={styles.logo}>SOOHWI.DEV</h1>
        <nav className={styles.gnb}>
          <ul className={styles.gnbList}>
            <li><a href="#home">&#60;Home &#47;&#62;</a></li>
            <li><a href="#skills">&#60;Skills &#47;&#62;</a></li>
            <li><a href="#project">&#60;Project &#47;&#62;</a></li>
            <li><a href="#career">&#60;Career &#47;&#62;</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;