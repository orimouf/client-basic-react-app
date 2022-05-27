import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return ( 
  	<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <Link to="/"> <span>Home</span> </Link>
        <Link to="/login"> <span>Login</span> </Link>
        <Link to="/register"> <span>Register</span> </Link>
        <Link to="/product"> <span>Product</span> </Link>
      </div>
    </nav>
  );
 };
 
 export default Navbar;
