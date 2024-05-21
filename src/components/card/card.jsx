import React from "react";

const SimpleCard = ({ title, subTitle, content, image }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "1500px",
      }}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p>{content}</p>
    </div>
  );
};

export default SimpleCard;
