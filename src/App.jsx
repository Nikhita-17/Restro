import styles from './App.module.css';
import React, { useState } from 'react';
import { Browse } from './components/Browse/Browse';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Menu1 } from './components/Menu/Menu1';
import Cart from './components/Cart/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.no === item.no);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.no === item.no ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: item.quantity }]);
    }

    // Update total
    setTotal((prevTotal) => prevTotal + (parseFloat(item.price))*item.quantity);
  };
  const removeFromCart = (item,itemNo) => {
    setTotal((prevTotal) => prevTotal - (parseFloat(item.price))*item.quantity);
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.no !== itemNo));
  };
  // const removeFromCart = (itemNo) => {
  //   const removedItem = cartItems.find((item) => item.no === itemNo);

  //   setTotal((prevTotal) => prevTotal - (parseFloat(item.price))*item.quantity);
  //   setCartItems((prevCartItems) => prevCartItems.filter((item) => item.no !== itemNo));

  //   // Update total
  // };

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Menu1 addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} total={total} />
    </div>
  );
}

export default App;
