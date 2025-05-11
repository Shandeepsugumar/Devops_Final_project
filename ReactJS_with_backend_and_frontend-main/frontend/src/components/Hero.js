import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Wear Your Code With Pride</h1>
        <p className="hero-subtitle">
          Premium apparel and accessories for developers and tech enthusiasts
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="shop-now-button">
            Shop Now
          </Link>
          <Link to="/about" className="learn-more-button">
            Learn More
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src={require('../assets/images/eat-sleep-code-repeat.jpg')} 
          alt="Developer clothing" 
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero; 