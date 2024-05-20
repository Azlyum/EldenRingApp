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
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p>{image}</p>
      <p>{content}</p>
    </div>
  );
};

export default SimpleCard;
