import React, { useState } from "react";
import "./Navbar.css";
import resume from "../../assets/JenigorlaNaresh.pdf";
import matter from "../../assets/matter.gif";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="Navbar d-flex">
        <div>
          <img className="gif" src={matter} alt="gif"></img>
        </div>
        <nav className="navbar d-flex ">
          <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <a className="nav-options " href="#Home">
              Home
            </a>
            <a className="nav-options" href="#About">
              About
            </a>
            <a className="nav-options" href="#Projects">
              Projects
            </a>
            <a className="nav-options" href="#Contact">
              Contact
            </a>
            <a
              className="Button btn-outline-success btn order-1 order-lg-0 fw-medium dnld "
              href={resume}
              // download="Jenigorla-Naresh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="fa-solid fa-bars logo-icon"></i>
            ) : (
              <i className="fa-solid fa-bars logo-icon"></i>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
