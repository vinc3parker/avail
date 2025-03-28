import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>🌱 Avail Gym Wear — Leftover stock, same mission.</p>
        <div className="footer-links">
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-note">Reducing landfill waste and microplastics one garment at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
