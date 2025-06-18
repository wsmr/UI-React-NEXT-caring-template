import React from 'react';
import styles from './Communities.module.css';

const Communities = () => {
  const communities = [
    {
      id: 'village-woodlands',
      name: 'The Village at The Woodlands Waterway',
      image: '/images/community-1.jpg',
      address: '2323 Lake Robbins Drive, The Woodlands, Texas 77380',
      rating: 4.2,
      reviews: 50,
      verified: true,
      price: 'Starting at $X,XXX'
    },
    {
      id: 'atria-kew',
      name: 'Atria Kew Gardens',
      image: '/images/community-2.jpg',
      address: '117-01 84th Avenue, Kew Gardens, New York 11418',
      rating: 4.4,
      reviews: 47,
      verified: true,
      price: 'Starting at $X,XXX',
      award: true
    },
    {
      id: 'springtree',
      name: 'Springtree Senior Living',
      image: '/images/community-3.jpg',
      address: '4201 Springtree Dr, Sunrise, Florida 33351',
      rating: 4.4,
      reviews: 59,
      verified: true,
      price: 'Starting at $X,XXX'
    },
    {
      id: 'forum-rancho',
      name: 'The Forum at Rancho San Antonio',
      image: '/images/community-4.jpg',
      address: '23500 Cristo Rey Drive, Cupertino, California 95014',
      rating: 4.8,
      reviews: 64,
      verified: true,
      price: 'Starting at $X,XXX',
      award: true
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className={styles.star}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className={styles.star}>★</span>);
      } else {
        stars.push(<span key={i} className={styles.emptyStar}>★</span>);
      }
    }
    
    return stars;
  };

  return (
    <section className={styles.communities}>
      <div className={styles.container}>
        <h2>Featured Communities</h2>
        <p className={styles.intro}>These verified communities are examples you can explore to get ideas for the amenities, services, and pricing available.</p>
        
        <div className={styles.communitiesGrid}>
          {communities.map((community) => (
            <div key={community.id} className={styles.communityCard}>
              <div className={styles.communityImage}>
                {/* Note: Community images should be approximately 400x300px */}
                <img src={community.image} alt={community.name} />
              </div>
              
              {community.verified && (
                <div className={styles.verifiedBadge}>
                  <span className={styles.checkmark}>✓</span>
                </div>
              )}
              
              <div className={styles.communityInfo}>
                <h3>{community.name}</h3>
                <p className={styles.address}>{community.address}</p>
                
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {renderStars(community.rating)}
                  </div>
                  <span className={styles.reviewCount}>({community.reviews} reviews)</span>
                </div>
                
                <p className={styles.price}>{community.price}</p>
                
                <div className={styles.communityButtons}>
                  <button className={styles.pricingBtn}>Get Pricing</button>
                  <a href={`#${community.id}`} className={styles.learnMore}>Learn More</a>
                </div>
                
                {community.award && (
                  <div className={styles.awardBadge}>
                    {/* Note: Award badge should be approximately 60x60px */}
                    <img src="/images/caring-star.png" alt="Caring Star" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
