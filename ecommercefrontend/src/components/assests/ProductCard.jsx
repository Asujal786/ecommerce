import React from "react";
import { Link } from 'react-router-dom';


function ProductCard(props) {

  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top"  />
        <div className="card-body">
        <Link to={`product/${props.id}`}>
            <p className="card-text itemTitle">{props.name}</p>
          </Link>
          <p> {props.desc}</p>
          <p> Price : <span className="price">${props.price} </span></p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
