import React from 'react';
import styles from './Experts.module.css';

const Experts = () => {
  const experts = [
    {
      id: 'susann',
      name: 'Susann Crawford',
      title: 'SVP of Sales, 10 years with Caring',
      image: '/images/expert-1.jpg',
      bio: 'Susann joined Caring in 2014 as a Family Advisor. She was recently named Senior Vice President in 2023 and leads our teams in supporting as many seniors and their families as possible. Her greatest heroes, her grandparents, helped cultivate her passion and purpose in this field.'
    },
    {
      id: 'molli',
      name: 'Dr. Molli Rothseid',
      title: 'Associate Clinical Social Worker, PhD, MSW, ASW',
      image: '/images/expert-2.jpg',
      bio: 'Dr. Rothseid is a gerontologist and clinical social worker passionate about improving the quality of life for older adults, specifically those with Alzheimer\'s disease, as well as reducing stereotypes surrounding mental illness, aging and dementia.'
    },
    {
      id: 'gene',
      name: 'Gene Altaffer',
      title: 'Masters of Science, Gerontology',
      image: '/images/expert-3.jpg',
      bio: 'Gene works in many avenues along the continuum of long-term care, assisting thousands of clients and their families since 1995. He\'s also sold long-term care insurance from numerous carriers while also assisting families with retirement planning.'
    }
  ];

  return (
    <section className={styles.experts}>
      <div className={styles.container}>
        <h2>Meet the Experts</h2>
        <p className={styles.intro}>We collaborate with a team of subject-matter experts to create relevant and accurate resources for you and your family.</p>
        
        <div className={styles.expertsGrid}>
          {experts.map((expert) => (
            <div key={expert.id} className={styles.expertCard}>
              <div className={styles.expertImage}>
                {/* Note: Expert images should be approximately 300x300px headshots */}
                <img src={expert.image} alt={expert.name} />
              </div>
              <div className={styles.expertInfo}>
                <h3>{expert.name}</h3>
                <h4>{expert.title}</h4>
                <p>{expert.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#more-experts" className={styles.meetMoreBtn}>Meet More Experts</a>
        </div>
        
        <div className={styles.featuredSection}>
          <h3 className={styles.featuredTitle}>Featured In:</h3>
          <div className={styles.logoGrid}>
            {/* Note: Media logos should be grayscale, approximately 120px wide each */}
            <img src="/images/logo-aarp.png" alt="AARP" className={styles.mediaLogo} />
            <img src="/images/logo-wsj.png" alt="Wall Street Journal" className={styles.mediaLogo} />
            <img src="/images/logo-bhg.png" alt="Better Homes & Gardens" className={styles.mediaLogo} />
            <img src="/images/logo-cbs.png" alt="CBS News" className={styles.mediaLogo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
