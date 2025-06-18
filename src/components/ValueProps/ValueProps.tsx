import React from 'react';
import styles from './ValueProps.module.css';

const ValueProps = () => {
  const valueProps = [
    {
      id: 'costs',
      title: 'Detailed costs and photos',
      description: 'Get comprehensive and up-to-date information for senior living and care providers.',
      icon: '/images/search-icon.svg'
    },
    {
      id: 'listings',
      title: 'Thousands of listings',
      description: 'View your options all in one place by using our free senior care directory, with listings across the U.S.',
      icon: '/images/list-icon.svg'
    },
    {
      id: 'advisors',
      title: 'Seasoned Family Advisors',
      description: 'We help you explore the best options for you and your loved one based on your location and budget.',
      icon: '/images/advisor-icon.svg'
    },
    {
      id: 'reviews',
      title: 'Reviews from customers',
      description: 'Learn about providers from seniors and their families, including details on food, atmosphere and staff.',
      icon: '/images/review-icon.svg'
    }
  ];

  return (
    <section className={styles.valueProps}>
      <div className={styles.container}>
        <h2>Everything you need for your search</h2>
        <p className={styles.intro}>We work to ensure you are well-equipped to make the best decision for you and your loved ones.</p>
        
        <div className={styles.propsGrid}>
          {valueProps.map((prop) => (
            <div key={prop.id} className={styles.propCard}>
              <div className={styles.iconContainer}>
                {/* Note: Each icon should be a simple SVG in teal/green color */}
                <img src={prop.icon} alt={prop.title} className={styles.icon} />
              </div>
              <h3>{prop.title}</h3>
              <p>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
