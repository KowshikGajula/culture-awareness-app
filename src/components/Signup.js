import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css'; // Custom CSS

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};

    if (!email.includes('@')) validationErrors.email = 'Invalid email address';
    if (username.length < 3) validationErrors.username = 'Username should be at least 3 characters long';

    // Password validation checks
    if (password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters long.';
    } else {
      if (!/[A-Z]/.test(password)) validationErrors.password = 'Password must contain at least one uppercase letter.';
      if (!/[a-z]/.test(password)) validationErrors.password = 'Password must contain at least one lowercase letter.';
      if (!/\d/.test(password)) validationErrors.password = 'Password must contain at least one number.';
      if (!/[@$!%*?&]/.test(password)) validationErrors.password = 'Password must contain at least one special character.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Update the errors state
      return;
    }

    // Clear errors if everything is valid
    setErrors({});

    const user = { email, username, password };

    try {
      const response = await fetch('https://indianculture-production.up.railway.app/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert('User signed up successfully!');
        navigate('/login'); // Redirect to the login page after signup
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
