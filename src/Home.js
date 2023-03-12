import "./Home.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Quote from "./Quote";
import Mission from "./Mission";
import Values from "./Values";
import Help from "./Help";

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Help />
        <div className="perspective-wrapper">
          <div className="backdrop" />
          <div className="top-layer">
            <Quote />
            <Mission />
            <Values />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
