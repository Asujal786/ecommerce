import React from "react";
import { Link } from "react-router-dom";

function  SaleCard ({ img, title, description, price, link }) {
  return (
    <div className="divbox">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height:"400px",
          width:"auto"
        }}
      />
      <div className="card-content">
        <h3 className="mm">{title}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default SaleCard;
