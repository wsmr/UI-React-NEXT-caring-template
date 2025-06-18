import React from 'react';
import styles from './Review.module.css';

const Review = () => {
  return (
    <section className={styles.review}>
      <div className={styles.container}>
        <h2>Share a review to help others like you</h2>
        <p>Firsthand reviews provide immense value to seniors and their families with similar needs and preferences as they navigate their search.</p>
        
        <p className={styles.stats}>
          We host the longest-running, highest-integrity senior living reviews program on the web — with over 400,000 consumer reviews published. We hope you'll add yours today too!
        </p>
        
        <button className={styles.writeReviewBtn}>Write a Review</button>
      </div>
    </section>
  );
};

export default Review;
