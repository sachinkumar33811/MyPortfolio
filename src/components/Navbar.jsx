import React from "react";
import "./Navbar.css";

function Navbar({ setActiveSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Sachin Kumar</span>
        <ul className="navbar-menu">
          <li><button onClick={() => setActiveSection('home')}>Home</button></li>
          <li><button onClick={() => setActiveSection('about')}>About</button></li>
          <li><button onClick={() => setActiveSection('skills')}>Skills</button></li>
          <li><button onClick={() => setActiveSection('projects')}>Projects</button></li>
          <li><button onClick={() => setActiveSection('experience')}>Experience</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;