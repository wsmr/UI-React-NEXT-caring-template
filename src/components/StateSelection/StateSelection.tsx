import React from 'react';
import styles from './StateSelection.module.css';

const StateSelection = () => {
  const states = [
    { id: 'alabama', name: 'Alabama' },
    { id: 'hawaii', name: 'Hawaii' },
    { id: 'michigan', name: 'Michigan' },
    { id: 'north-carolina', name: 'North Carolina' },
    { id: 'utah', name: 'Utah' }
    // Note: The actual site has all 50 states, this is a representative sample
  ];

  return (
    <section className={styles.stateSelection}>
      <div className={styles.container}>
        <h2>Want to do your own research?</h2>
        <p className={styles.intro}>We have everything you need to get started based on your location.</p>
        
        <div className={styles.selectionBox}>
          <h3>Select your state and browse our filterable database to begin</h3>
          
          <div className={styles.stateGrid}>
            {states.map((state) => (
              <a key={state.id} href={`#${state.id}`} className={styles.stateLink}>
                {state.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateSelection;
