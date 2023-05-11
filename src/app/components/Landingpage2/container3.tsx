
import "./container2.css";
import "./container3.css";
import React, { useEffect, useState } from "react";




const Container3 = ({ image, title, text }:any) => {
  
  return (
    <div>
      <div className="container3">
        <h4>SHOP ALL</h4>
        <div className="card-container3" style={{ display: "flex" }}>
          <div className="card-lands2">
            <div className="card-container-land2">
              <div className="card-image-land2">
                <img src="./images/1.png" alt="Multi-Vitamin" />
                <div className="image-shadow-land2"></div>
              </div>
              <div className="card-details-land2">
                <h2>**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)</h2>
                <h3>
                  $39.95 NZD{" "}
                  <span className="original-price-land2">$199.75 NZD</span>
                </h3>
                <button className="shop-now-btn-land2">ON SALE</button>
              </div>
            </div>
          </div>

          <div className="card-lands2">
            <div className="card-container-land2">
              <div className="card-image-land2">
                <img src="./images/2.png" alt="Multi-Vitamin" />
                <div className="image-shadow-land2"></div>
              </div>
              <div className="card-details-land2">
                <h2>DETOX + BLOAT SUPPORT VALUE PACK</h2>
                <h3>
                  $39.95 NZD{" "}
                  <span className="original-price-land2">$199.75 NZD</span>
                </h3>
                <button className="shop-now-btn-land2">ON SALE</button>
              </div>
            </div>
          </div>
          <div className="card-land2">
            <div className="card-landing2">
              <div className="card-container-landing2">
                <div className="card-image-landing2">
                  <img src="./images/3.png" alt="Multi-Vitamin" />
                  <div className="image-shadow-landing2"></div>
                </div>
                <div className="card-details-landing2">
                  <h2>PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</h2>
                  <h3>
                    $39.95 NZD{" "}
                    <span className="original-price-landing2">$199.75 NZD</span>
                  </h3>
                  <button className="shop-now-btn-landing2">ON SALE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-land2">
            <div className="card-landing2">
              <div className="card-container-landing2">
                <div className="card-image-landing2">
                  <img src="./images/4.png" alt="Multi-Vitamin" />
                  <div className="image-shadow-landing2"></div>
                </div>
                <div className="card-details-landing2">
                  <h2>APPLE CIDER VINEGAR</h2>
                  <h3>
                    $94.95 NZD{" "}
                    <span className="original-price-landing2">$199.75 NZD</span>
                  </h3>
                  <button className="shop-now-btn-landing2">ON SALE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="View-all-products">VIEW ALL PRODUCTS</button>
      </div>


      <div className="landpage-part2">
      {/* <h4>SHOP ALL</h4> */}

    
    
      </div>




      
    </div>
  );
};

export default Container3;
