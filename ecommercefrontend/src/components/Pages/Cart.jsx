import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../features/cartSlice";

function Cart(props) {
  const CartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (CartItems.length==0) {
    return (
      <div>
       <h4 className="page-heading">Cart</h4>

       <div className="cartStatus " style={{marginTop:"50px"}}>
        <p style={{textAlign:"center", fontSize:"20px"}}> Your Cart is Empty</p>
       </div>
      </div>
    );
  }
  function Remove(item) {
    dispatch(Remove(item));
  }
  return (
    <div>
      <h4 className="page-heading">Cart</h4>
      {CartItems.map((item) => {
        return (
          <div className="Cart-item-list" key={item.id}>
            <div className="f-item">
              <div className="flex-item">
                <p> </p>
                <p className="cart-item-heading">{item.name}</p>
                <p className="cart-item-size">
                  {" "}
                  Size: <b> {item.size}</b>{" "}
                </p>
              </div>
            </div>
            <div className="s-item">
              <p className="cart-item-price">
                {" "}
                Price: <span style={{ color: "blue" }}> ${item.price}</span>
              </p>
            </div>
            <div className="t-item">
              <button
                onClick={() => {
                  Remove(item);
                }}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
