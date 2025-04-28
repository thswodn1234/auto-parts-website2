import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>AutoParts</h1>
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>홈</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>회사소개</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>제품</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>문의</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;