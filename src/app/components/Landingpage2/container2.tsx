"use client";

import React from "react";
import "./container2.css";

const Container2 = () => {
  return (
    <>
      <div className="card-containers">
        <div className="card-detailss">
          <h2>TAKE CONTROL OF YOUR HEALTH</h2>
          <p>
            The Good4Me range has been formulated based on scientific &
            traditional evidence.
          </p>
          <p>
            Our vitamins are here and ready to boost your mood, immunity and
            overall well-being!
          </p>
          <p>Made in New Zealand from local and imported ingredients.</p>
          <button>BROWSE YOUR RANGE</button>
        </div>
        <div className="card-imagess">
          <div className="imagess-1" style={{ padding: "10px" }}>
            <img src="./images/Rectangle 17.png" alt="Image 1" id="imgs" />
            <img src="./images/Rectangle 18.png" alt="Image 2" id="imgs" />
          </div>
          <img src="./images/Rectangle 16.png" alt="Image 3" />
        </div>
      </div>
      <div className="landpage2_card">
        <h4>OUR PRODUCTS ARE</h4>
        <div className="card-land2">
          <div className="card-landing2">
            <div className="card-container-landing2">
              <div className="card-image-landing2">
                <img src="./images/image 17.png" alt="Multi-Vitamin" />
                <div className="image-shadow-landing2"></div>
              </div>
              <div className="card-details-landing2">
                <h2>MULTI-VITAMIN (3 MONTHS SUPPLY)</h2>
                <h3>
                  $39.95 NZD{" "}
                  <span className="original-price-landing2">$199.75 NZD</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="card-lands2ing">
            <div className="card-container-land2ing">
              <div className="card-image-land2ing">
                <img src="./images/community.png" alt="Multi-Vitamin" />
                <div className="image-shadow-land2ing"></div>
              </div>
              <div className="card-details-land2ing">
                <h2>VITAMIN C: IMMUNITY SUPPORT</h2>
                <h3>
                  $39.95 NZD{" "}
                  <span className="original-price-land2ing">$199.75 NZD</span>
                </h3>
                <button className="shop-now-btn-land2ing">ON SALE</button>
              </div>
            </div>
          </div>

          <div className="card-lands2">
            <div className="card-container-land2">
              <div className="card-image-land2">
                <img
                  src="./images/good4me-multi-vitamin-everyday-wellness-3-bottles-save-25-22037117927591_1800x1800 1.png"
                  alt="Multi-Vitamin"
                />
                <div className="image-shadow-land2"></div>
              </div>
              <div className="card-details-land2">
                <h2>MULTI-VITAMIN (3 MONTHS SUPPLY)</h2>
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
                  <img src="./images/Rectangle 8 (1).png" alt="Multi-Vitamin" />
                  <div className="image-shadow-landing2"></div>
                </div>
                <div className="card-details-landing2">
                  <h2>APPLE CIDER VINEGAR (3 MONTHS SUPPLY)</h2>
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
      <div className="card-review">
        <div className="card-container-review">
          <div className="card-details-review">
            <span>REAL REVIEWS</span>
            <br />
            <br />
            <span className="result">REAL RESULTS</span>
            <br />
            <br />
            ⭐⭐⭐⭐
            <p className="paragraph">
              “We have perfected our formulas over time, based on your feedback.
              Check out hundreds of reviews on our website.We can`t wait until
              you are a part of our Good4Me Family.”
            </p>
            <span>_Chloe H.</span>
          </div>
          <div className="card-images-review">
            <img
              src="./images/good4me-full-range-value-pack-save-33-22069447786663_800x 1.png"
              alt="Image 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container2;
