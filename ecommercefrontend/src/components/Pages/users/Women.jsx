import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../assests/ProductCard";
import Filter from "../../assests/Filter";

function Women(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/women/product/")
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                setData(data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h4 className="page-heading">Women</h4>
            <Filter/>
            <div className="product-grid">
                {data.map((product) => (
                    <ProductCard 
                        key={product._id}
                        id={product._id}
                        name={product.name} 
                        desc={product.description} 
                        price={product.price} 
                        quantity={product.quantity} 
                        size={product.size} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Women;
