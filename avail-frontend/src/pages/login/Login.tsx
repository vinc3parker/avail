import React, { useState } from "react";
import "./auth.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img
          src="/brand/Transparent_white.png"
          alt="Avail Logo"
          className="auth-logo"
        />
        <img
          src="images/stock/Stock6.jpg"
          alt="Login Background"
          className="auth-bg"
        />
      </div>
      <div className="auth-form-section">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
