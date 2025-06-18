import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'Our Story', url: '#our-story' },
      { name: 'Our Team', url: '#our-team' },
      { name: 'Careers', url: '#careers' },
      { name: 'Press', url: '#press' }
    ],
    resources: [
      { name: 'Care Guides', url: '#care-guides' },
      { name: 'Senior Living', url: '#senior-living' },
      { name: 'Home Care', url: '#home-care' },
      { name: 'Memory Care', url: '#memory-care' }
    ],
    support: [
      { name: 'Contact Us', url: '#contact' },
      { name: 'FAQs', url: '#faqs' },
      { name: 'Privacy Policy', url: '#privacy' },
      { name: 'Terms of Service', url: '#terms' }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            {/* Note: Footer logo should be the same as header logo */}
            <img src="/images/logo-placeholder.png" alt="Caring.com" className={styles.logo} />
            <p className={styles.tagline}>The leading resource for senior living and care</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>About Us</h4>
              <ul>
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.footerSocial}>
            <h4>Connect With Us</h4>
            <div className={styles.socialIcons}>
              {/* Note: Social icons should be simple SVG icons */}
              <a href="#facebook" aria-label="Facebook">
                <span className={styles.socialIcon}>f</span>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <span className={styles.socialIcon}>t</span>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <span className={styles.socialIcon}>i</span>
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <span className={styles.socialIcon}>in</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Caring.com Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
