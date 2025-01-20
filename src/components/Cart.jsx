// src/components/Cart.jsx
import React, { useState } from "react";
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, proceedToCheckout }) => {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle the visibility of the checkout window
  const handleCheckout = () => {
    setIsCheckoutVisible(true);
  };

  const handleCancelCheckout = () => {
    setIsCheckoutVisible(false);
  };

  // Group items by name and calculate the quantity for each item
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul className="cart-items">
            {groupedItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <span>{item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  <span>Qty: {item.quantity}</span>
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
          <div className="checkout-items">
            <ul>
              {groupedItems.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.quantity} - ₹{(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
          <p><strong>Total Amount: ₹{totalPrice.toFixed(2)}</strong></p>
          <div className="checkout-actions">
            <button onClick={() => proceedToCheckout()}>Place Order</button>
            <button onClick={handleCancelCheckout}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
