import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <h1>Zane's Portfolio</h1>
          </NavLink>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={() => setIsMenuOpen(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/hobbies" onClick={() => setIsMenuOpen(false)}>
              Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink to="/goals" onClick={() => setIsMenuOpen(false)}>
              Goals
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={() => setIsMenuOpen(false)}>
              IT Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>
              Photo Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" onClick={() => setIsMenuOpen(false)}>
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 