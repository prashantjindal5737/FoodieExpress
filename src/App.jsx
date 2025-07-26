// src/App.jsx
import React from 'react'
import Navbar1 from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screen/Cart';
import AddFood from './screen/AddFood';
import { SearchProvider } from './components/Search';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <SearchProvider>
    <CartProvider>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addfood" element={<AddFood />} />
      </Routes>
      <Footer/>
    </CartProvider>
  </SearchProvider>
);

export default App;
// updated