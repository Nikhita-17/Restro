import React from 'react'
import styles from "./Navbar.module.css";
import { Menu } from '../Menu/Menu'
export const Navbar = () => {
  return (
      <div id="home">
    <div className={styles.a}>
        <img src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg" />
        <nav>
            <ul>
                <a href="#a" className={styles.wah}><li>Home </li></a>
               <a className={styles.wah} href="#abOut"><li>About</li></a> 
                <a href="#Menu"className={styles.wah}><li>Menu</li></a>
                <a href="#" className={styles.wah}><li>Pages</li></a>
                <a href="#cart" className={styles.wah}><li>Cart</li></a>
            </ul>
        </nav>
    </div>
    </div>
  )
}


