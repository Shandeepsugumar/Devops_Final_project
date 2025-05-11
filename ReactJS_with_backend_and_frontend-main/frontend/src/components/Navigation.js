import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import Context from './Context';
import '../styles/Navigation.css';

const Navigation = () => {
  const userInfo = useContext(Context);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">ShopApp</Link>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="nav-actions">
          {userInfo.loggedIn ? (
            <div className="user-menu">
              <span className="welcome">Hello, {userInfo.name}</span>
              <Link to="/cart" className="cart-icon">
                Cart ({userInfo.cartItems})
              </Link>
              <Link to="/account" className="account-link">My Account</Link>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-button">Log In</Link>
              <Link to="/signup" className="signup-button">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 