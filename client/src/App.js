import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Subscription from './Views/Subscription';
import Location from './Views/Location.js';
import Coffee from './Views/Coffee';
import Navbar from './components/Navbar.js';
import React, { useState } from 'react';
import './App.css';
import Products from './Views/Products.js';
import Footer from './components/Footer.js';
import SingleProduct from './Views/SingleProduct.js';
import Cart from './Views/Cart.js';
import PaymentSuccess from "./containers/payment_success";
import PaymentError from "./containers/payment_error";




function App() {

  const [cart, setCart] = useState([]);

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/location" element={<Location />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/cart" element={  <Cart cart={cart} setCart={setCart} />  } /> 
          <Route path="/product/:productName" element={<SingleProduct cart={cart} setCart={setCart} />} />
        <Route path="/payment/success" element={<PaymentSuccess />}
        />
        <Route path="/payment/error" element={<PaymentError />}
        />
        </Routes>
      </Router>
      <Footer />
    </div >

  );
}

export default App;
