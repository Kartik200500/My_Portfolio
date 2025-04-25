import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "./utils";

export const About = () => {
  return(
    <section className={styles.container} id="about">
      <h2 className={styles.heading}>About</h2>
    <div className={styles.content}>
    < img src={getImageUrl("hero/unnamed.png")} className={styles.image} alt="about image"/>
      <ul className={styles.list}>
        <li className={styles.aboutItems}>
          <div className={styles.listItems}>
           <h3>Frontend Developer</h3>
           <p>lorem ipsum</p>
          </div>
        </li>
        <li className={styles.aboutItems}>
         <div className={styles.listItems}>
          <h3>Ui Designer</h3>
          <p> lorem ipsum</p>
         </div>
        </li>
      </ul>
    </div>
    
    
   </section>
  )
};