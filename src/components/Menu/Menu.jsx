import React, { useState } from 'react';
import styles from './Menu.module.css';
import skills from '../../data/Menu.json';

export const Menu = () => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (itemId, change) => {
    // Find the index of the item in the skills array
    const itemIndex = skills.findIndex((item) => item.id === itemId);

    // Make a copy of the skills array to avoid mutating the original
    const updatedSkills = [...skills];

    // Update the quantity for the specific item
    updatedSkills[itemIndex].quantity += change;

    // Ensure the quantity is not less than 1
    if (updatedSkills[itemIndex].quantity < 1) {
      updatedSkills[itemIndex].quantity = 1;
    }

    // Update the state with the new quantity
    setQuantity(updatedSkills[itemIndex].quantity);
  };

  return (
    <div id="Menu">
      <h1 className={styles.ni}>Browse our menu</h1>
      <section className={styles.nikhi}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.abc}>
              <div className={styles.bur}>
                <div className={styles.burg}>
                  <img className={styles.omgg} src={skill.image} height="250px" width="300px" alt={skill.title} />
                </div>
                <div className={styles.star}>{skill.price}</div>
              </div>
              <div className={styles.text}>
                <h2>{skill.title}</h2>
                <p className={styles.emo}>{skill.description}</p>
              </div>
              <div className={styles.qcontainer}>
                <button className={styles.bt4}>Add To Cart</button>
                <button className={styles.btn3} onClick={() => updateQuantity(skill.id, -1)}> - </button>
                <span className={styles.qdisplay}>{skill.quantity}</span>
                <button className={styles.btn3} onClick={() => updateQuantity(skill.id, 1)}> + </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
