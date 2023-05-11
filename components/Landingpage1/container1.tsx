import React from "react";
import "./container.css";

const Container = () => {
  return (
    <>
      <div className="container1">
        <div className="image-container">
          <img src="./images/1-(2) 1.png" alt="" id="image1"></img>
          <div className="card">
            <div className="body">
              <span className="good">Good4Me</span>
              <span className="apple">Apple Cider Vinegar</span>
              <p className="paragraph">
                Good4Me Apple Cider Vinegar gummies are the newest addition to
                your morning health and well-being regime.
              </p>
              <button className="shopnow-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="certified-container">
        <h4>CERTIFIED TO GOOD4ME</h4>
        <span className="pick">
          Pick your beauty products today. 50% OFF on the most popular GOOD4ME.
          Order all classy products today!
        </span>
      </div>
              <h4>SPECIAL COLLECTIONS</h4>
      <div className="cards">
        <div className="card1">
          <div className="card-container">
            <div className="card-image">
              <img
                src="./images/good4me-multi-vitamin-everyday-wellness-3-bottles-save-25-22037117927591_1800x1800 1.png"
                alt="Multi-Vitamin"
              />
              <div className="image-shadow"></div>
            </div>
            <div className="card-details">
              <h2>MULTI-VITAMIN: EVERYDAY WELLNESS</h2>
              <h3>
                $39.95 NZD <span className="original-price">$199.75 NZD</span>
              </h3>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card-container1">
            <div className="card-image1">
              <img
                src="./images/good4me-full-range-value-pack-save-33-22236720529575_800x (1) 1.png"
                alt="Multi-Vitamin"
              />
              <div className="image-shadow"></div>
            </div>
            <div className="card-details">
              <h2>FULL RANGE VALUE PACK (SAVE 33%)</h2>
              <h3>
                $39.95 NZD <span className="original-price">$199.75 NZD</span>
              </h3>
              <button className="shop-now-btn1">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card-container">
            <div className="card-image">
              <img src="./images/CARD3 IMAGE.png" alt="Multi-Vitamin" />
              <div className="image-shadow"></div>
            </div>
            <div className="card-details">
              <h2>VITAMIN C: IMMUNITY SUPPORT (3 MONTH SUPPLY)</h2>
              <h3>
                $79.95 NZD <span className="original-price">$199.75 NZD</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card-container1">
            <div className="card-image1">
              <img
                src="./images/good4me-iron-energy-support-3-month-supply-22236761260199_800x 1.png"
                alt="Multi-Vitamin"
              />
              <div className="image-shadow"></div>
            </div>
            <div className="card-details">
              <h2>IRON: ENERGY SUPPORT (3 MONTH SUPPLY)</h2>
              <h3>
                $89.95 NZD <span className="original-price">$199.75 NZD</span>
              </h3>
              <button className="shop-now-btn1">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
