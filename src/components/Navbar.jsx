import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">🎬 CinePulse</div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Reviews</a>
        <a href="#">Genres</a>
        <a href="#">Top Picks</a>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;
