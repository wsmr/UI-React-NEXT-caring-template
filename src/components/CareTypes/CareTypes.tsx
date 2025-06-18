import React from 'react';
import styles from './CareTypes.module.css';

const CareTypes = () => {
  const careTypes = [
    {
      id: 'assisted-living',
      title: 'Assisted living',
      description: 'At costs ranging from $1,200 to $8,000 per month, assisted living communities are a great choice for someone who needs help with activities of daily living, such as eating, grooming and bathing. Many also offer respite care (short-term stays).',
      icon: '/images/assisted-living-icon.svg'
    },
    {
      id: 'memory-care',
      title: 'Memory care',
      description: 'Memory care communities are specially designed living environments for people with Alzheimer\'s or other dementias. You can expect that staff members have extra training to help people with memory loss. Costs are $3,000 per month and up. Some also provide respite care.',
      icon: '/images/memory-care-icon.svg'
    },
    {
      id: 'in-home-care',
      title: 'In-home care',
      description: 'For help with driving, getting around the house, meal preparation, companionship, and light housekeeping, hire a professional caregiver through an in-home care agency. Caregivers can be hired on a one-time basis or a regular monthly schedule. Rates usually range from $20 to $40 per hour.',
      icon: '/images/in-home-care-icon.svg'
    },
    {
      id: 'independent-living',
      title: 'Independent living',
      description: 'Independent living communities are great for residents who want to enjoy the perks of community living, but who don\'t need regular assistance with activities of daily living. Costs range from $1,000 to $4,000 per month.',
      icon: '/images/independent-living-icon.svg'
    },
    {
      id: 'nursing-homes',
      title: 'Nursing homes',
      description: 'Also called skilled nursing facilities (SNFs), nursing homes are staffed by skilled medical professionals who can provide 24-hour support. Some also offer short-term stays for someone who is transferring from the hospital but not yet ready to go home.',
      icon: '/images/nursing-homes-icon.svg'
    },
    {
      id: 'hospice',
      title: 'Hospice',
      description: 'Hospice care helps provide comfort to your loved one in their last days. Care teams specialize in keeping pain and suffering to a minimum. This care is often provided at home, but care teams can also go to a hospital or other care facility to provide relief.',
      icon: '/images/hospice-icon.svg'
    }
  ];

  return (
    <section className={styles.careTypes}>
      <div className={styles.container}>
        <h2>Types of Care and Support Available</h2>
        <p className={styles.intro}>There are multiple types of care and communities available, so it's important to know which is the best fit for your needs.</p>
        
        <div className={styles.careGrid}>
          {careTypes.map((careType) => (
            <div key={careType.id} className={styles.careCard}>
              <div className={styles.iconContainer}>
                {/* Note: Each icon should be a simple SVG in teal/green color */}
                <img src={careType.icon} alt={careType.title} className={styles.icon} />
              </div>
              <h3>{careType.title}</h3>
              <p>{careType.description}</p>
              <a href={`#${careType.id}`} className={styles.learnMore}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTypes;
