import React from "react";
import { useState } from 'react';
import "../assets/index.css";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  }
 


 
  return (
    <div>
      <header>
      <nav className="navbar">
      <div className="logo">SRICHA PARAJULI</div>
            
     </nav>

      <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
       
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="#about"> About Me </a>
          </li>
          <li>
            <a href="#section"> Services </a>
          </li>

          <li>
            <a href="#Contactus"> Contact Me</a>
          </li>
        </ul>
        </div>
        <div className="mobile-menu-icon" onClick={handleToggle}>
        {isMobile ? 'X' : '☰'}
        
      </div>
      
       
    
      </header>
    </div>
  );
}

export default Navbar;
