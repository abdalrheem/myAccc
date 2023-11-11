import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { Button, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/accc.jpeg";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="slider">
        <nav className="navbar">
          <div className="navbar-container">
            <ColorModeSwitch />
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Image src={logo} width="100px" height="50px" rounded={50} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Solution"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="patterns">
            <svg width="100%" height="100%">
              <text x="50%" y="60%" textAnchor="middle">
                Acorac
              </text>
            </svg>
          </div>
          <p className="word">What are you waiting for?</p>
          <div className="hero-btns">
            <Button className="btns btn--outline btn--large">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
