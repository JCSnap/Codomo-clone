import React, { Component } from "react";
import "./Navbar.css";
import logo from "./assets/codomo.jpeg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-items">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">About Us</div>
            <div className="navbar-item">Our Work</div>
            <div className="navbar-item">Products</div>
            <div className="navbar-item">Join Us</div>
            <div className="navbar-item">Blog</div>
            <div className="navbar-search"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
