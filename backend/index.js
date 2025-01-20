// backend/index.js or server.js
const express = require("express");
const mongoose = require("mongoose");
const Order = require("./models/Order");  // Assuming you created an Order model

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/the_classic_optician", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
