import React from 'react';
import gta from '../assets/gta5.png';
import Batman from '../assets/Batman.png';
import xbox from '../assets/xbox.png';
import mortal from '../assets/mortal.png';
import lego from '../assets/lego.png';
import fifa from '../assets/mbappe.png';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.Typography}> 
        <h3 className={styles.LandingHeading}>
        Driffle is a <span style={{color:"#5DF5B5"}}>one-stop shop </span>for all your gaming needs.
        </h3>
        <p className={styles.LandingParagraph}>
        Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases 
or hard-to-find classics, you're sure to find what you're looking for on Driffle.
        </p>
        <span className={styles.visitButton}>
        Visit our store</span>
      </div>  
      <div className={styles.innerCircle}>
       <img className={styles.innerImg} src={gta} alt="gta"/>
      </div>

      <div className={styles.middleCircle}>
      <img className={styles.middleImg} src={Batman} alt="Batman"/>
      <img className={styles.middleImg2} src={xbox} alt="xbox"/>
      </div>

      <div className={styles.outerCircle}>
      <img className={styles.outerImg} src={fifa} alt="fifa"/>
      <img className={styles.outerImg2} src={lego} alt="lego"/>
      <img className={styles.outerImg3} src={mortal} alt="mortal"/>
      </div>

    </div>
  )
}
