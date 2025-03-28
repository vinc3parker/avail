import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ name, email, password });
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img
          src="/brand/Transparent_white.png"
          alt="Avail Logo"
          className="login-logo"
        />
        <img
          src="images/stock/Stock6.jpg"
          alt="Signup Background"
          className="login-bg"
        />
      </div>
      <div className="login-form-section">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
