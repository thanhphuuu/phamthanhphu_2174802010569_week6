import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <h1>Online Store</h1>
    <div className="cart-link">
      <Link to="/cart">🛒 Giỏ hàng</Link>
    </div>
  </header>
);

export default Header;
