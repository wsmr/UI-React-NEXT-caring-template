import React from 'react';
import styles from './Resources.module.css';

const Resources = () => {
  const resources = [
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      image: '/images/resource-estate-planning.jpg',
      color: '#8e44ad'
    },
    {
      id: 'paying-for-care',
      title: 'Paying for Care',
      image: '/images/resource-paying-for-care.jpg',
      color: '#3498db'
    },
    {
      id: 'alzheimers',
      title: 'Alzheimer\'s and Other Dementias',
      image: '/images/resource-alzheimers.jpg',
      color: '#e74c3c'
    },
    {
      id: 'senior-living-guide',
      title: 'Senior Living Guide',
      image: '/images/resource-senior-living.jpg',
      color: '#9b59b6'
    },
    {
      id: 'tough-conversations',
      title: 'Tough Conversations with Aging Loved Ones',
      image: '/images/resource-tough-conversations.jpg',
      color: '#2ecc71'
    },
    {
      id: 'tech-tools',
      title: '6 Indispensable Tech Tools for Family Caregivers',
      image: '/images/resource-tech-tools.jpg',
      color: '#f39c12'
    }
  ];

  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2>Top resources for seniors and caregivers</h2>
        <p className={styles.intro}>We have thousands of expert-written articles to help you learn more about care options.</p>
        
        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className={styles.resourceCard}
              style={{ backgroundImage: `url(${resource.image})` }}
            >
              <div 
                className={styles.overlay}
                style={{ backgroundColor: `${resource.color}` }}
              >
                <h3>{resource.title}</h3>
                <button className={styles.readMoreBtn}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
