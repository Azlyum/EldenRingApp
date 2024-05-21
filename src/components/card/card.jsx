import React from "react";
import "../../css/Card.css";

const SimpleCard = ({ title, subTitle, content, image }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="imageStyle" />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
