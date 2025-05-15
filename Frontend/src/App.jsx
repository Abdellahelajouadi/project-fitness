
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Markup from "../pages/Markup";  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Markup />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};
  
export default App;
