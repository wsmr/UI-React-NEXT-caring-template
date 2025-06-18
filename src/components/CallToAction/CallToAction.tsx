import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Speak to a Caring Family Advisor</h2>
        <p>We'll help narrow your search with recommended options that best meet your care, lifestyle, and budgetary needs.</p>
        
        <div className={styles.ctaButtons}>
          <button className={styles.getHelpBtn}>Get Help Now</button>
          <a href="tel:8559483865" className={styles.callBtn}>
            <span className={styles.phoneIcon}>📞</span>
            Call Us at (855) 948-3865
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
