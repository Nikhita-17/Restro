import React from 'react'
import styles from "./Browse.module.css";
import skills from "../../data/browse.json";
export const Browse = () => {
  return (
    
      <div id="browse">
            
            <p className={styles.ni}>Browse our menu</p>
            <div className={styles.nix}>
                {/* <div className={styles.skills}> */}
          {skills.map((skill, id) => {
              return (
                  <div key={id} className={styles.skill}>
                    <div className={styles.div1}>
                    <img src={skill.image} />
                    <b><p className={styles.lol}>{skill.title}</p></b>
                    <p className={styles.o}>{skill.description}</p>
                    <a className={styles.nu} href="#">{skill.button}</a>
            </div>
                    </div>  );
                })}
                {/* </div> */}
            </div>
            <button className={styles.bt5} type="button">Order Online</button>
                <button className={styles.bt6} type="button">Book a table</button>
    </div>
  )
}
