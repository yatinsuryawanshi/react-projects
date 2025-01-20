import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Sunglasses', price: 100 },
    { id: 2, name: 'Reading Glasses', price: 50 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
