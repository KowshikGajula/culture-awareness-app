import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume login is successful
    onLogin(); // Update authentication status
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
