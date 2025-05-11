import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

export default function Home() {
    const featuredProducts = [
        {
            id: 143,
            title: "It's a good day to code",
            price: 24.99,
            image: require('../assets/images/good-day-to-code.jpg'),
            category: "t-shirts"
        },
        {
            id: 486,
            title: "Eat. Sleep. Code. Repeat.",
            price: 22.99,
            image: require('../assets/images/eat-sleep-code-repeat.jpg'),
            category: "t-shirts"
        },
        {
            id: 233,
            title: "JavaScript Developer Mug",
            price: 14.99,
            image: require('../assets/images/good-day-to-code.jpg'),
            category: "mugs"
        },
        {
            id: 567,
            title: "React Hoodie",
            price: 39.99,
            image: require('../assets/images/eat-sleep-code-repeat.jpg'),
            category: "hoodies"
        }
    ];
    
    return (
        <div className="home-container">
            <Hero />
            
            <section className="featured-section">
                <div className="section-header">
                    <h2>Featured Products</h2>
                    <p>Check out our most popular items</p>
                </div>
                
                <div className="featured-products">
                    {featuredProducts.map(product => (
                        <div className="featured-product-item" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                
                <div className="view-all-container">
                    <Link to="/products" className="view-all-button">
                        View All Products
                    </Link>
                </div>
            </section>
            
            <section className="categories-section">
                <div className="section-header">
                    <h2>Shop by Category</h2>
                    <p>Browse our collections</p>
                </div>
                
                <div className="categories-grid">
                    <Link to="/products?category=t-shirts" className="category-card">
                        <div className="category-image">
                            <img src={require('../assets/images/good-day-to-code.jpg')} alt="T-Shirts" />
                        </div>
                        <h3>T-Shirts</h3>
                    </Link>
                    
                    <Link to="/products?category=hoodies" className="category-card">
                        <div className="category-image">
                            <img src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Hoodies" />
                        </div>
                        <h3>Hoodies</h3>
                    </Link>
                    
                    <Link to="/products?category=mugs" className="category-card">
                        <div className="category-image">
                            <img src={require('../assets/images/good-day-to-code.jpg')} alt="Mugs" />
                        </div>
                        <h3>Mugs</h3>
                    </Link>
                    
                    <Link to="/products?category=stickers" className="category-card">
                        <div className="category-image">
                            <img src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Stickers" />
                        </div>
                        <h3>Stickers</h3>
                    </Link>
                </div>
            </section>
            
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Join Our Community</h2>
                    <p>Subscribe to our newsletter for exclusive deals and updates</p>
                    <form className="cta-form">
                        <input type="email" placeholder="Your email address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}