"use client";

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="./images/Logo_-_Good4Me_140x 1.png" alt="my logo img" />
          <div className="navbar-div">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="navbar-item">
                <Link to="/shop" > SHOP</Link>
              </li>
              <li className="navbar-item">
                <Link to="/faq">FAQ`S</Link>
              </li>
              <li className="navbar-item">
                <Link to="/stockists">STOCKISTS</Link>
              </li>
              <li className="navbar-item">
                <Link to="/wholesale">WHOLESALE</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="bar">
          <img
            src="./images/vector.png"
            alt="my logo img"
            
          />
          &nbsp
          <img src="./images/vector1.png" alt="my logo img" />
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Nav;
