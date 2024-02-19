// Cart.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart, total }) => {
  const price = (quantity, itemPrice) => {
    return quantity * itemPrice;
  };
  return (
    <section id="cart">
      <h2 className={styles.cartheading}>Shopping Cart</h2>
    <div className={styles.cartcontainer}>
      {/* Render cart items here */}
      {cartItems.map((item) => (
        <div key={item.no} className={styles.cartitem}>
           <img className={styles.omgg} src={item.image} height="100px" width="100px" alt={item.title} /><br />
          <span className={styles.itemtitle}>{item.title}</span>🍕 Quantity: <span className={styles.quantity}>{item.quantity}</span><br />
          <span className={styles.one}> 🍟 Price: {item.price} </span><br />
          <span className={styles.two}>🍨 <u>Amount: {price(item.quantity, item.price)}</u></span>
          <img
            src="./delete1.png"
            onClick={() => removeFromCart(item,item.no)}
            className={styles.abc}
            height="40px"
            width="40px"
            alt="Delete"
          />
        </div>
      ))}
      <div className={styles.total}>Total: Rs {total}</div>
      {/* <Link to="/payment" className={styles.totalLink}>
          <div className={styles.total}>Total: Rs {total}</div>
        </Link> */}
    </div>
    </section>
  );
};

export default Cart;
