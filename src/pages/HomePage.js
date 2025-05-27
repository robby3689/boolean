import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="spinner"></div>
        <p>Loading NextBoolean...</p>
      </div>
    );
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Empowering Future Developers</h1>
        <p>Your journey to becoming a job-ready Java Developer starts here.</p>
        <Link to="/courses" className="cta-button">Explore Courses</Link>
      </section>

      {/* Slider Section */}
      <section className="slider-section square-style">
        <div className="square-slider-container">
          <img src="/images/banner.png" alt="NextBoolean Promo" className="square-image" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About NextBoolean</h2>
        <p>
          At NextBoolean, we are passionate about helping aspiring developers transition into
          the tech industry. Whether you're refreshing old skills or starting from scratch, our
          project-based training prepares you for real-world jobs.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">Real-time project experience</div>
          <div className="feature-card">Resume & interview prep</div>
          <div className="feature-card">Flexible remote/weekend classes</div>
          <div className="feature-card">Industry-focused curriculum</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Let’s build your future in tech together.</p>
        <Link to="/contact" className="cta-button">Book a Free Call</Link>
      </section>
    </div>
  );
};

export default HomePage;
