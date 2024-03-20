import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios"; 

function Navbar(props) {
  const navigate = useNavigate();
  const CartProducts = useSelector((state) => state.cart);
  const amount = CartProducts.length;
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const [userId, setUserId] = useState("");



  useEffect(() => {
    const token = localStorage.getItem("token");
    const isLoggedIn = token ? true : false;
    if (isLoggedIn) {
      setLoggedIn(true);
      const decode = jwtDecode(token);
      console.log(decode);
      const userName = decode.fName;
      const isAdmin = decode.isAdmin;
      setUserId(decode.id);
      setUserDetails(userName);
  
      if (isAdmin) {
        navigate("/admin");
      } 
    }
  }, [loggedIn, navigate]);

  async function handleLog() {
    try {
      localStorage.clear();
      setLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Urban Flutter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kids">
                Kids
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {loggedIn ? (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>
                    <i className="fa-regular fa-user mx-2"></i>
                  </b>
                  <span style={{ marginRight: "1px" }}>
                    <b>{userDetails}</b>{" "}
                  </span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/profile/${userId}`}>
                      <button className="dropdown-item">
                        Account <i className="fa-regular fa-user"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders">
                      <button className="dropdown-item">
                        Orders <i className="fa-regular fa-user"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={handleLog} className="dropdown-item">
                      Logout{" "}
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item login">
                <Link to="/Login" className="nav-link login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="fa-solid fa-cart-shopping"></i> : {amount}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
