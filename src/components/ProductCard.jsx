import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>Price: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
