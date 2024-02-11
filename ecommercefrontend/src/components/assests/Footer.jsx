import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="mainfooter">
      <div className="grid-footer">
        <div className="fgitem ">
          <Link to="/">
            <img src={logo} className="footer-img" />
          </Link>
          <Link  className="td" to="/">
            {" "}
            <h5 className="f-h"> Urban Flutter</h5>
          </Link>
        </div>
        <div className="fgitem">
          <p className="f-i"> Shopping</p>
          <ul>
            <Link  className="td" to="/men">
              {" "}
              <li className="footer-list"> Men </li>
            </Link>
            <Link className="td"  to="/women">
              {" "}
              <li className="footer-list"> Women</li>
            </Link>
            <Link className="td"  to="/kids">
              {" "}
              <li className="footer-list"> Kids</li>
            </Link>
          </ul>
        </div>
        <div className="fgitem">
          <p className="f-i"> Information</p>
          <ul>
            <li className="footer-list"> About Us</li>
            <li className="footer-list"> Terms and Conditions</li>
            <li className="footer-list"> Privacy Policy</li>
            <li className="footer-list"> FAQ </li>
          </ul>
        </div>
       
      </div>
      <div className="line">
          <p className="f-line"> All Rights Reserved © 2024. Urban Flutter, Sydney, 2000</p>
        </div>
    </div>
  );
}

export default Footer;
