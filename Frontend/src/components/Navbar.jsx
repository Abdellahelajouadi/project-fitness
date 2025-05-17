import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Make sure you have this file

const Navbar = () => { 
return( 
<div className="navbar"> 
<div className="logo-title"> 
<img src="/666.png" alt="Logo" className="logo" /> 
<h1>Fitness Tracking</h1> 
</div> 
<ul className="nav-links"> 
<li><Link to="/">Home</Link></li> 
<li><Link to="/about">About</Link></li> 
<li><Link to="/contact">Contact</Link></li> 
<li><Link to="/register">Create an account</Link></li> 
<li><Link to="/login">Login</Link></li> {/* إضافة رابط لتسجيل الدخول */} 
</ul> 
</div> 
);
};

export default Navbar;