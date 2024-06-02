import React, { useState } from "react";
import "../../css/Card.css";

const SimpleCard = ({ title, subTitle, content, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="imageStyle" />
      {isHovered && (
        <div className="card-content">
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleCard;
