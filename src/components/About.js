import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission to promote awareness of Indian culture and heritage.</p>
      </header>
      <div className="about-content">
        <section>
          <h2>Our Vision</h2>
          <p>We aim to bring India's rich cultural heritage to the forefront through digital experiences.</p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>We are a group of cultural enthusiasts committed to preserving and showcasing India's history.</p>
        </section>
        {/* Add more sections */}
      </div>
    </div>
  );
}

export default About;
