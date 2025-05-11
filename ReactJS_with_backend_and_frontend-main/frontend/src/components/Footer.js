import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">ShopApp</h3>
                    <p className="footer-description">
                        High-quality apparel and accessories for developers and tech enthusiasts.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Shop</h3>
                    <ul className="footer-links">
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/products?category=t-shirts">T-Shirts</Link></li>
                        <li><Link to="/products?category=hoodies">Hoodies</Link></li>
                        <li><Link to="/products?category=mugs">Mugs</Link></li>
                        <li><Link to="/products?category=stickers">Stickers</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-title">Subscribe</h3>
                    <p className="newsletter-text">Subscribe to our newsletter to get updates on new products and promotions.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email" className="newsletter-input" />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p className="copyright">
                    &copy; {currentYear} ShopApp. All rights reserved.
                </p>
                <p className="attribution">
                    Originally created by Codr Kai Tutorials
                </p>
            </div>
        </footer>
    );
}

export default Footer;