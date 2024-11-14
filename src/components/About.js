import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch user ID on component mount
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setErrorMessage('You need to be logged in to submit feedback.');
    }
  }, []);

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setErrorMessage('You need to be logged in to submit feedback.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          feedback,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your feedback!');
        setFeedback(''); // Clear feedback input
      } else {
        setErrorMessage('Failed to submit feedback. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while submitting feedback.');
    }
  };

  return (
    <div className="about-container">
    <header className="about-header">
      <h1>About Us</h1>
      <p>Learn more about our mission to promote awareness of Indian culture and heritage.</p>
    </header>
    <div className="about-content">
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>We aim to bring India's rich cultural heritage to the forefront through digital experiences.</p>
      </section>
      <section className="about-section">
        <h2>Our Team</h2>
        <p>We are a group of cultural enthusiasts committed to preserving and showcasing India's history.</p>
      </section>
        {/* Feedback Section */}
        <section className="feedback-section">
          <h2>Submit Your Feedback</h2>
          <form onSubmit={handleSubmitFeedback}>
            <textarea
              placeholder="Write your suggestions here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </section>
      </div>
    </div>
  );
}

export default About;
