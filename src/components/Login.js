import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = {};
    if (username.length < 3) validationErrors.username = 'Username should be at least 3 characters long';
    if (password.length < 6) validationErrors.password = 'Password should be at least 6 characters long';

    if (!captchaToken) {
      validationErrors.captcha = 'Please complete the reCAPTCHA';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Validate reCAPTCHA token with backend
      const captchaResponse = await fetch('http://localhost:8080/api/recaptcha/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken })
      });
      if (!captchaResponse.ok) {
        throw new Error('Captcha validation failed');
      }

      const user = { username, password };
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('token', data.token);
        onLogin();
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <ReCAPTCHA
            sitekey="6Lcmc34qAAAAAD6xPhHcJ1b_5XbhQRZoHVWkBed6"
            onChange={(token) => setCaptchaToken(token)}
          />
          {errors.captcha && <span className="error-message">{errors.captcha}</span>}
          <button type="submit">Login</button>
        </form>
        <p className="signup-prompt">
          Don’t have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;