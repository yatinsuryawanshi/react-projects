// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import "./App.css";

const sampleItems = [
  { id: 1, name: "Ray-Ban Wayfarer", price: 15000 },
  { id: 2, name: "Oakley OO9208", price: 18000 },
  { id: 3, name: "Maui Jim Stingray", price: 21000 },
  { id: 4, name: "Gucci GG0061S", price: 35000 }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const proceedToCheckout = () => {
    alert("Order has been placed successfully!");
    setCartItems([]);  // Clear the cart after placing order
  };

  return (
    <div className="app">
      <Header />
      <div className="item-list">
        <h2>Available Items</h2>
        <ul>
          {sampleItems.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} proceedToCheckout={proceedToCheckout} />
    </div>
  );
}

export default App;
