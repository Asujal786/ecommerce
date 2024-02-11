import React from "react";
import SaleCard from "./SaleCard";
import sale from "../../Data/sale";

function TopSale(props) {
  return (
    <div className="section">
      <h3 className="headingsale" style={{textAlign:"center"}}> Top Sale Offers</h3>
<br></br>
      {sale.map((sale)=>{
        return ( 
            <SaleCard  title={sale.title} price={sale.price} description={sale.description} img={sale.img} link={sale.link} />
        )
      })}
    </div>
  );
}

export default TopSale;
