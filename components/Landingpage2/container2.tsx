"use client"

import React from 'react'
import "./container2.css"

const Container2 = () => {
  return (
    <>
<div className="card-containers">
  <div className="card-detailss">
    <h2>TAKE CONTROL OF YOUR HEALTH</h2>
    <p>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
    <p>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
    <p>Made in New Zealand from local and imported ingredients.</p>
    <button>BROWSE YOUR RANGE</button>
  </div>
  <div className="card-imagess">
    <div className='imagess-1' style={{padding:"10px"}}>

    <img src="./images/Rectangle 17.png" alt="Image 1" id ="imgs"/>
    <img src="./images/Rectangle 18.png" alt="Image 2" id ="imgs"/>
    </div>
    <img src="./images/Rectangle 16.png" alt="Image 3"/>
  </div>
</div>

        
    </>
  )
}

export default Container2;