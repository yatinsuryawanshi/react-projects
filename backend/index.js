// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());  // Allow requests from frontend
app.use(express.json());  // For parsing JSON data

let cartItems = [
  { id: 1, name: "Ray-Ban Wayfarer", price: 15000 },
  { id: 2, name: "Oakley OO9208", price: 18000 },
  { id: 3, name: "Maui Jim Stingray", price: 21000 },
  { id: 4, name: "Gucci GG0061S", price: 35000 }
];

// Route to get all cart items
app.get("/cart", (req, res) => {
  res.json(cartItems);
});

// Route to add an item to the cart
app.post("/cart", (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.status(201).json(newItem);
});

// Route to remove an item from the cart by id
app.delete("/cart/:id", (req, res) => {
  const { id } = req.params;
  cartItems = cartItems.filter(item => item.id !== parseInt(id));
  res.status(200).json({ message: "Item removed" });
});

// Route to checkout
app.post("/checkout", (req, res) => {
  const totalAmount = req.body.totalAmount;
  // Simulate checkout processing
  res.status(200).json({ message: "Order placed successfully", totalAmount });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
