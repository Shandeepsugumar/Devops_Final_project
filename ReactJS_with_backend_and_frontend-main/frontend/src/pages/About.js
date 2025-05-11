import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="about-subtitle">Learn more about our company and our mission</p>
      </div>
      
      <div className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, our company started with a simple idea: to create high-quality, creative, and comfortable 
            products for developers and tech enthusiasts. What began as a small project has grown into a beloved brand serving 
            customers worldwide.
          </p>
          <p>
            We're passionate about designing products that celebrate the developer lifestyle and culture. Our team consists
            of developers, designers, and creative professionals who understand what it means to live and breathe code.
          </p>
        </div>
        <div className="about-image">
          <img src={require('../assets/images/good-day-to-code.jpg')} alt="Our team" />
        </div>
      </div>
      
      <div className="about-section reverse">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            We believe that developers and tech enthusiasts deserve products that reflect their passion and creativity. 
            Our mission is to create items that are not only functional but also showcase the unique culture of the 
            tech community.
          </p>
          <p>
            We strive to use sustainable materials and ethical production processes wherever possible, ensuring that
            our products are not only great for you but also for the planet.
          </p>
        </div>
        <div className="about-image">
          <img src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Our products" />
        </div>
      </div>
      
      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🔍</div>
            <h3>Quality</h3>
            <p>We're committed to creating products of the highest quality, from design to materials.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>We strive to minimize our environmental impact in every aspect of our business.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>Just like in software, we believe in continuous improvement and innovative thinking.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">👥</div>
            <h3>Community</h3>
            <p>We support and celebrate the global developer community in everything we do.</p>
          </div>
        </div>
      </div>
      
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src={require('../assets/images/good-day-to-code.jpg')} alt="Team member" />
            </div>
            <h3>Jane Doe</h3>
            <p className="member-role">Founder & CEO</p>
            <p>Full-stack developer with a passion for UI/UX design and creating products that developers love.</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Team member" />
            </div>
            <h3>John Smith</h3>
            <p className="member-role">Chief Design Officer</p>
            <p>Creative director with 10+ years of experience in product design and brand development.</p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={require('../assets/images/good-day-to-code.jpg')} alt="Team member" />
            </div>
            <h3>Emily Johnson</h3>
            <p className="member-role">Head of Operations</p>
            <p>Operations expert who ensures that our products meet the highest quality standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 