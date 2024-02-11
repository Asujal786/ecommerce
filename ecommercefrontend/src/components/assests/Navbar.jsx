import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function Navbar(props) {

  const navigate=useNavigate();
  const CartProducts = useSelector((state) => state.cart);
  const amount = CartProducts.length;
  const [loggedIn, SetIsLoggedIn] = useState(false);
  const [userDetails, SetUserDetails] = useState("");
  const[userId, SetUserId]=useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isLoggedIn = token ? true : false;
    if (isLoggedIn) {
      SetIsLoggedIn(true);
      const decode = jwtDecode(token);
      console.log(decode);
      const userName = decode.fName;
      SetUserId(decode.id)
      SetUserDetails(userName);
      navigate("/");
    }
  }, [loggedIn]);

  function handleLog() {
    localStorage.clear();
    SetIsLoggedIn(false);
    navigate("/");
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <p className="navbar-brand">Urban Flutter</p>
          </Link>
          <br></br>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to="/">
                  {" "}
                  <span className="nav-link" aria-current="page">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to="/men">
                  {" "}
                  <span className="nav-link">Men</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to="/women">
                  {" "}
                  <span className="nav-link">Women</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: "none" }} to="/kids">
                  {" "}
                  <span className="nav-link">Kids</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {loggedIn ? (
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <b><i className="fa-regular fa-user mx-2"></i></b>
                     <span style={{marginRight:"1px"}}><b>{userDetails}</b> </span> 
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                       <Link to={`/profile/${userId}`} ><button className="dropdown-item">
                          Account <i className="fa-regular fa-user"></i>
                        </button></Link> 
                      </li>
                       <li>
                       <Link to="/orders"><button className="dropdown-item">
                          Orders <i className="fa-regular fa-user"></i>
                        </button></Link> 
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button onClick={handleLog} className="dropdown-item">
                          Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link to="/Login">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn btn-primary"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </li>
              <Link to="/cart">
                {" "}
                <li>
                  <button className="btn btn-primary mx-3">
                    <i className="fa-solid fa-cart-shopping"></i> : {amount}
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
