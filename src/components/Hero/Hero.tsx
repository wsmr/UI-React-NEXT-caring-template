import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>We've helped over 100,000 seniors find a senior living community</h1>
            <p>Whether you're looking for a senior living community or help with in-home care, Caring is here to help make this process easier — for free.</p>
          </div>
          <div className={styles.heroImage}>
            {/* Hero Image: Family/caregiver with senior */}
            {/* Note: Hero image should be approximately 600x400px showing a caregiver with senior */}
            <img 
              src="/images/hero-image-placeholder.jpg" 
              alt="Caregiver with senior" 
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.searchSection}>
          <h2>Where are you looking for care?</h2>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Enter City, State or Zip" 
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>Search</button>
          </div>
          <p className={styles.speakAdvisor}>
            Or speak to a Family Advisor now: <a href="tel:8005580653">(800) 558-0653</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
