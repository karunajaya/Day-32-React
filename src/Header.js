import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';  

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);  

  return (
    <header className="header">
      <div className="logo">Ship-Kart</div>
      <input className="search-bar" type="text" placeholder="Search" />
      <div className="cart-info">
        <button className="cart-btn">
          Cart ({totalQuantity}) 
        </button>
      </div>
    </header>
  );
};

export default Header;
