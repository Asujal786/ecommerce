import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../../features/cartSlice";

function KProductPage(props) {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/men/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchData();
  }, [id]);
  
  if (!product) {
    return <div>Loading...</div>;
  }

  
  function AddToCart(product){
    dispatch(add(product));
   }
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img src="product-image-url" alt="Product" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text-desc my-4"> {product.description}</p>
              <p className="card-text-price my-4">Price: ${product.price}</p>
              <p className="card-text-quantity my-4">Quantity Available: {product.quantity}</p>
              <p className="card-text-size my-4">Size : {product.size}</p>
              <button onClick={()=>{AddToCart(product)}} className="btn btn-primary my-2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KProductPage;
