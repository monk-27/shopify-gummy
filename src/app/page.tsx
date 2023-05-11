"use client"
import React, { useEffect, useState } from "react";

import { BrowserRouter, Router, Routes,Route } from "react-router-dom";
import Nav from "./components/Landingpage1/navbar";
import Home from "./components/Landingpage1/home";


const App=()=> {
 
  
  return (
    <>
    
   
    
        <Nav/>
        <Home/>
      {/* <BrowserRouter> */}
      
       
      {/* <Routes>
      <Route path="/" element={<Home />} />
      </Routes> */}
      
      
      {/* </BrowserRouter> */}
  
    </>
  
    
  );
}

export default App;