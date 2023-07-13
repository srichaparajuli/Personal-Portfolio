import React from "react";
import "../assets/index.css";
function Navbar() {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          Sricha Portfolio
        </a>
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
      </header>
    </div>
  );
}

export default Navbar;
