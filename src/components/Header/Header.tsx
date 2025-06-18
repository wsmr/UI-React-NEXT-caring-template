import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            {/* Logo Image: Replace with actual logo */}
            <a href="/">
              {/* Note: Logo image should be approximately 180x60px */}
              <img 
                src="/images/logo-placeholder.png" 
                alt="Caring.com" 
                className={styles.logoImage}
              />
            </a>
          </div>
          <div className={styles.headerRight}>
            <a href="tel:8005580653" className={styles.phoneNumber}>(800) 558-0653</a>
            <button className={styles.contactBtn}>Contact Us</button>
            <button className={styles.mobileMenuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
