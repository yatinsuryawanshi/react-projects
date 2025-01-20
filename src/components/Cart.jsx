// src/components/Cart.jsx
import React, { useState } from "react";
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, proceedToCheckout }) => {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    setIsCheckoutVisible(true);
  };

  const handleCancelCheckout = () => {
    setIsCheckoutVisible(false);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <span>{item.name}</span>
                  <span>₹{item.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}

      {isCheckoutVisible && (
        <div className="checkout-window">
          <h3>Checkout</h3>
          <p>Total Amount: ₹{totalPrice.toFixed(2)}</p>
          <button onClick={() => proceedToCheckout()}>Place Order</button>
          <button onClick={handleCancelCheckout}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
