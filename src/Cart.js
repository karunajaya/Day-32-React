import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './redux/cartSlice';
import './Cart.css'; 

const Cart = () => {
  const { products, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>
    </div>
  );
};

export default Cart;




