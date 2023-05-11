"use client";

import React, { useEffect, useState } from "react";
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
                HOME
              </li>
              <li className="navbar-item">
                 SHOP
              </li>
              <li className="navbar-item">
                FAQ`S
              </li>
              <li className="navbar-item">
                STOCKISTS
              </li>
              <li className="navbar-item">
                WHOLESALE
              </li>
              <li className="navbar-item">
                CONTACT
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
