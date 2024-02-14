import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './Views/Home';
import Shop from './Views/Products';
import Subscription from './Views/Subscription';
import Location from './Views/Location';
import Coffee from './Views/Coffee';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Products from './Views/Products.js';



function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
          <Route path= "/home" element={<Home/>}/>
          <Route path= "/products" element={<Products/>}/>
          <Route path= "/subscription" element={<Subscription/>}/>
          <Route path= "/location" element={<Location/>}/>
          <Route path= "/coffee" element={<Coffee/>}/>
          {/* {Routes with comp to ren} */}
          </Routes>
      </Router>
    </div>

  );
}

export default App;
