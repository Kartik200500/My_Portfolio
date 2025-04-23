import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "./utils.js";
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I am Kartik Jhanwar</h1>
      <p className={styles.description}>Third-year B.Tech student pursuing Computer Science with specialization in
Cloud Computing with a strong foundation in computer science. Proficient in
Figma for design and have knowledge of web development. Passionate about
leveraging technology to solve complex problems and keen on expanding my
expertise in cloud-based solutions.
      </p>
      <a href="kartikjhanwar2005@gmail.com" className={styles.contact}>My Email</a>
    </div>
    <img src={getImageUrl("hero/pfp.png")} alt="Hero image of me" className={styles.image}/>
    <div className={styles.topblur}></div>
    <div className={styles.bottomblur}></div>
  </section>
};