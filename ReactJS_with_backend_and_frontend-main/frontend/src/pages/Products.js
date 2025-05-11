import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching products from an API
    setTimeout(() => {
      const sampleProducts = [
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
        },
        {
          id: 789,
          title: "Python Laptop Sticker",
          price: 4.99,
          image: require('../assets/images/good-day-to-code.jpg'),
          category: "stickers"
        },
        {
          id: 890,
          title: "Web Developer Cap",
          price: 19.99,
          image: require('../assets/images/eat-sleep-code-repeat.jpg'),
          category: "caps"
        }
      ];
      
      setProducts(sampleProducts);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(sampleProducts.map(product => product.category))];
      setCategories(uniqueCategories);
      
      setLoading(false);
    }, 1000);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      
      <div className="product-filters">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          <button 
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </button>
          
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="product-item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="no-products">No products found matching your criteria</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products; 