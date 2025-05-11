import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
          />
        </Link>
      </div>
      <div className="product-info">
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        {product.price && (
          <div className="product-price">${product.price.toFixed(2)}</div>
        )}
        <div className="product-actions">
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="view-details-btn">
            <Link to={`/product/${product.id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 