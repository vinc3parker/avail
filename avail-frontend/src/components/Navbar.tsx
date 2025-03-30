import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${!showNavbar ? 'hidden' : ''}`}>
            <div className="navbar-logo">
                <Link to="/">Avail Gym Wear</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/shop">Shop</Link></li>
                <span className="nav-divider">|</span>
                <li><Link to="/checkout">Checkout</Link></li>
                <span className="nav-divider">|</span>
                <li><Link to="/login">Login / Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;