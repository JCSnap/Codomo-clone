import React, { Component } from "react";
import "./Mission.css";
import logo from "./assets/codomo.jpeg";

class Mission extends Component {
  render() {
    return (
      <div className="mission-container">
        <div className="mission-description">
          Codomo is on a mission to deliver the most{" "}
          <span className="mission-keyword">
            delightful education experiences
          </span>{" "}
          to liberate innovative minds
        </div>
        <div className="mission-image">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Mission;
