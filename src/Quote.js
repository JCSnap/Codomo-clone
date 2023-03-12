import React, { Component } from "react";
import "./Quote.css";

class Quote extends Component {
  render() {
    return (
      <div className="quote-container">
        <div className="quote-space-top" />
        <div className="quote-large">DESIGN INNOVATION FOR ALL</div>
        <div className="quote-small">
          A unique <span className="keyword">Design Thinking</span> and{" "}
          <span className="keyword">Computational Thinking</span> experience
        </div>
        <div className="quote-space-bottom" />
      </div>
    );
  }
}

export default Quote;
