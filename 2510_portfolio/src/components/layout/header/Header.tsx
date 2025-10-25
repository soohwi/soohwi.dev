/**
 * components/layout
 * Header.tsx
**/

import clsx from 'clsx';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerInner, 'hwiInner')}>
        <h1 className={styles.logo}>SOOHWI.DEV</h1>
        <nav className={styles.gnb}>
          <ul className={styles.gnbList}>
            <li><a href="#home">&#60;Home &#47;&#62;</a></li>
            <li><a href="#skills">&#60;Skills &#47;&#62;</a></li>
            <li><a href="#projects">&#60;Projects &#47;&#62;</a></li>
            <li><a href="#career">&#60;Career &#47;&#62;</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;