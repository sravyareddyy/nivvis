// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Home/nav';
import Home from './Home/home';
import Products from './Products/product';
import About from './About/about';
import Footer from './Home/footer';
import Productdetails from './Products/productdetails';
const App = () => (
  <Router>
    <NavigationBar />
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productName" element={<Productdetails />} />
      </Routes>
    </div>
    <Footer />

  </Router>
);

export default App;
