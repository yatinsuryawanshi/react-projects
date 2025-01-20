import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api'; // Import the fetchOrders function

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <strong>{order.customerName}</strong>: {order.items.length} items, {order.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
