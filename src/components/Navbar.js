import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as a prop
    navigate('/'); // Redirect to Home1 page after logout
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Indian Culture</h1>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/monument" className="nav-item">Monuments</Link></li>
            <li><Link to="/heritage" className="nav-item">Heritage</Link></li>
            <li><Link to="/festival" className="nav-item">Festivals</Link></li>
            <li><Link to="/cuisine" className="nav-item">Cuisine</Link></li>
            <li><Link to="/music-and-dance" className="nav-item">Music & Dance</Link></li>
            <li><Link to="/art-and-craft" className="nav-item">Art & Craft</Link></li>
            <li><Link to="/culture" className="nav-item">Culture</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            {location.pathname === '/' || location.pathname === '/home1' ? (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/admin-login">Admin Login</Link></li> {/* Add Admin Login link */}
              </>
            ) : null}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
