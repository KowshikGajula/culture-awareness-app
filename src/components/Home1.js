import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home1.css';

function Home1() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="home1">
      <h2>Welcome to Indian Culture</h2>
      <p>
        Discover the rich history and heritage of India. Our platform inspires awareness 
        about Indian culture, heritage, historical places, and famous monuments. Dive deep 
        into the cultural roots, festivals, and artistic expressions that shape the soul of India.
      </p>
      <div className="grid-container">
        <div className="grid-item" onClick={goToLogin}>
          <img src="https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=" alt="Monument 1" />
          <p>Explore Monuments</p>
        </div>
        <div className="grid-item" onClick={goToLogin}>
          <img src="https://t4.ftcdn.net/jpg/01/05/74/17/360_F_105741732_TStsOZH9VSbjfOTYYPHAw5repCZWhOa0.jpg" alt="Heritage 1" />
          <p>Discover Heritage</p>
        </div>
        <div className="grid-item" onClick={goToLogin}>
          <img src="https://media.istockphoto.com/id/1351592257/photo/traditional-diya-lamps-lit-during-diwali-celebration.jpg?s=612x612&w=0&k=20&c=kxt66SWeJmTPBrc1tLJ6Gwn3A8TxGd1Mh9VCp6TNWMI=  " alt="Festival 1" />
          <p>Celebrate Festivals</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={goToLogin}>Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  );
}

export default Home1;
