import React from "react";
import { Link } from "react-router-dom";

function Card({ img, category }) {

     
    return (
      <div
        className="gitem"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          marginTop:"20px",
          backgroundColor:"#617a78",
          backgroundBlendMode:"multiply"
        }}
      >
       <h3 className="m">{category}</h3>

          <button className="btn aa btn-primary">Explore</button>

      </div>
    );
  }
export default Card;
