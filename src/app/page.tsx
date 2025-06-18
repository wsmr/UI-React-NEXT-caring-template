import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CareTypes from '../components/CareTypes/CareTypes';
import Communities from '../components/Communities/Communities';
import Review from '../components/Review/Review';
import ValueProps from '../components/ValueProps/ValueProps';
import Experts from '../components/Experts/Experts';
import Resources from '../components/Resources/Resources';
import StateSelection from '../components/StateSelection/StateSelection';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <CareTypes />
      <Communities />
      <Review />
      <ValueProps />
      <Experts />
      <Resources />
      <StateSelection />
      <Footer />
    </main>
  );
}
