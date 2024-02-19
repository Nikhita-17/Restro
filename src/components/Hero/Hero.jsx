import React from 'react'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <div>
       <div className={styles.b}>
            <div className={styles.c}>
                <p className={styles.do}>The best place to</p>
                <p className={styles.do1}>eat burgers in India.</p>
                <p className={styles.mj}>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
                <button className={styles.bt4} type="button">Reservate</button>
                <button className={styles.bt3} type="button">Order Online</button>
            </div>
            <div className={styles.d}>
                <div className={styles.y}>
                    <img className={styles.z} src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg" height="670px" width="1050px" />
              

            </div>
    </div>

        </div>
        <div className={styles.nah}>
            <p>Order from your favorite app today!</p>
            <li><img src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg" /></li>
            <li><img src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"/></li>
            <li><img src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg" /></li>
            <li><img src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg" /></li>
            <br />
            <br />
            <br />
            <br />
        
        </div>
    </div>
  )
}


