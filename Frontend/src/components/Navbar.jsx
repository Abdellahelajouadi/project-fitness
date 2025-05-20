import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Make sure you have this file

const Navbar = () => { 
return( 
<div className="navbar"> 
<div className="logo-title"> 
<img src="/666.png" alt="Logo" className="logo" /> 
<h1>Suivi Fitness</h1> 
</div> 
<ul className="nav-links"> 
<li><Link to="/">Accueil</Link></li> 
<li><Link to="/about">À propos</Link></li>
<li><Link to="/contact">Contact</Link></li> 
<li><Link to="/register">Créer un compte</Link></li> 
<li><Link to="/login">Connexion</Link></li> {/* إضافة رابط لتسجيل الدخول */} 
</ul> 
</div> 
);
};

export default Navbar;