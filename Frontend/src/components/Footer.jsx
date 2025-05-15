import React from "react";
import "../App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
return (
<footer className="footer">
<div className="footer-container">
<p>&copy; {new Date().getFullYear()} Fitness Tracking. All rights reserved.</p>
<p>Created with love by <strong>Abdellah El-ajouadi</strong></p>

<div className="social-icons">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
</div> 
</div> 
</footer> 
);
};

export default Footer;