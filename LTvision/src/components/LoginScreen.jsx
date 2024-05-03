import React, { useState } from 'react';
import './LoginScreen.css'; // Import CSS file for styling

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password, rememberMe });
  };

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Redirecting to signup page');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Redirecting to forgot password page');
  };

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        {/* Image on left occupying 70% of the screen */}
        <img src="./src\assets\bgLogin1.jpg" alt="Login" className="login-image" />
      </div>
      <div className="form-container">
      <h2>
    <img src="./src/assets/logo.png" alt="LtVision Logo" className="logo-icon" />
    LtVision
</h2>
        <div className="buttons-container">
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="signup-button" onClick={handleSignup}>Signup</button>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-row">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot-password">
              <span onClick={handleForgotPassword}>Forgot password?</span>
            </div>
          </div>
          <button
  type="submit"
  onClick={handleLogin}
  style={{
    padding: '8px', // Match padding with text fields
    borderRadius: '3px', // Match border radius with text fields
    backgroundColor: '#6997DD', // Custom blue color
    color: 'white', // Text color
    border: '1px solid #6997DD', // Border color
    width: '100%', // Make button same width as text fields
    marginTop: '15px', // Add some margin for spacing
  }}
>
  Login
</button>
        </form>
        <div className="register-text">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
