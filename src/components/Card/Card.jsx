import React from "react";
import "./Card.css";

const Card = ({ image, title, subtitle, description, buttonText }) => {
  return (
    <div className="card">

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">

        <h3>{title}</h3>

        <h5>{subtitle}</h5>

        <p>{description}</p>

        <button>{buttonText}</button>

      </div>

    </div>
  );
};

export default Card;