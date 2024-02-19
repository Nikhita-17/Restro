// Menu1.js
import React, { useState } from 'react';
import styles from './Menu.module.css';  // Update the import path based on your file structure
import menuData from '../../data/Menu.json';

export const Menu1 = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [searchQuery, setSearchQuery] = useState('');
  
  // const updateQuantity = (itemId, change) => {
  //   const itemIndex = menuItems.findIndex((item) => item.no === itemId);
  //   const updatedMenuItems = [...menuItems];

  //   updatedMenuItems[itemIndex].quantity += change;

  //   if (updatedMenuItems[itemIndex].quantity < 1) {
  //     updatedMenuItems[itemIndex].quantity = 1;
  //   }

  //   setMenuItems(updatedMenuItems);
  // };

  const updateQuantity = (itemNo, change) => {
    const itemIndex = menuItems.findIndex((item) => item.no === itemNo);
    const updatedMenuItems = [...menuItems];
  
    updatedMenuItems[itemIndex].quantity += change;
  
    if (updatedMenuItems[itemIndex].quantity < 1) {
      updatedMenuItems[itemIndex].quantity = 1;
    }
  
    setMenuItems(updatedMenuItems);
  };
  

  // const addToCartHandler = (item) => {
  //   addToCart(item);
  // };

  const addToCartHandler = (item) => {
    const updatedItem = { ...item, quantity: item.quantity }; // Make sure the quantity is updated
    addToCart(updatedItem);
  };

  const filteredMenuItems = menuItems.filter(item => item.id.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div id="Menu">
      <h1 className={styles.ni}>Browse our menu</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for the item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <section className={styles.nikhi}>
        {filteredMenuItems.map((item, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.abc}>
              <div className={styles.bur}>
                <div className={styles.burg}>
                  <img className={styles.omgg} src={item.image} height="250px" width="300px" alt={item.title} />
                </div>
                <div className={styles.star}>{item.price}</div>
              </div>
              <div className={styles.text}>
                <h2>{item.title}</h2>
                <p className={styles.emo}>{item.description}</p>
              </div>
              <div className={styles.qcontainer}>
                <button className={styles.bt4} onClick={() => addToCartHandler(item)}>Add To Cart</button>
                <button className={styles.btn3} onClick={() => updateQuantity(item.no, -1)}> - </button>
                <span className={styles.qdisplay}>{item.quantity}</span>
                <button className={styles.btn3} onClick={() => updateQuantity(item.no, 1)}> + </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
