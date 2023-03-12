import React from "react";
import "./Carousell.css";

function Carousell(props) {
  const index = props.index;
  const image = props.block.image;
  const title = props.block.title;
  const description = props.block.description;

  const isAlternate = index % 2 === 0;

  return (
    <div className="carousell-block">
      {isAlternate ? (
        <div>
          <div className="carousell-block-image">
            <img src={image} alt="image" />
          </div>
          <div className="carousell-block-text">
            <div className="carousell-block-title">{title}</div>
            <div className="carousell-block-description">{description}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="carousell-block-text">
            <div className="carousell-block-title">{title}</div>
            <div className="carousell-block-description">{description}</div>
          </div>
          <div className="carousell-block-image">
            <img src={image} alt="image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousell;
