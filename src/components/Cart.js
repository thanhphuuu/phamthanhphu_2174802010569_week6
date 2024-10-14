import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Stored Cart:', storedCart); // Kiểm tra giá trị giỏ hàng trong console
    setCartItems(storedCart);
  }, []);
  

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Giỏ hàng trống!</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>Giá: {item.price} VND</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;

