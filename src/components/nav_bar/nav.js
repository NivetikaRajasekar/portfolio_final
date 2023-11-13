import React from "react";
import { useState } from "react";
import './nav.css';
export default function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <p>Nivetika <span>Rajasekar</span></p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <i class="fa fa-bars"></i>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
        {['home', 'about', 'education', 'works','contact'].map((item) => (
          <li className = 'p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}