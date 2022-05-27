import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Product from './pages/product/Product';
import Navbar from './components/navbar/Navbar';




function App() {
  const user = true

  return (
    <div>
      <Navbar />
        <Routes>
          <Route excat path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={!user ? <Register /> : <Home />} />
          {user && (
            <>
              <Route path="/product" element={<Product />} />
            </>
          )}
        </Routes>
    </div>
  );
}

export default App;