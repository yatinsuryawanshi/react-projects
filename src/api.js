// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001'; // Replace with your backend URL

export const fetchCart = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
};

export const addToCart = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the port if necessary

// Function to create an order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Function to get all orders
export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};
