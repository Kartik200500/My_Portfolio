import React , {useState} from "react";
import styles from "./nav.module.css";
import {getImageUrl} from "./utils";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">My projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
  
};