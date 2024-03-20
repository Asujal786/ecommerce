import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const userDetails = {
    fName,
    lName,
    email,
    password,
    phoneNumber,
    streetAddress,
    buildingNumber,
    city,
    postcode,
  };

  const handleSignup = (e) => {
    e.preventDefault();
   const successAlert=document.getElementById("successAlert");

    try{
    axios
      .post("http://localhost:5000/users/signup", userDetails)
      .then((res) => {
        console.log("Data has been submitted successfully" + res);
        setFName("")
        setLName("")
        setCity("")
        setBuildingNumber("")
        setEmail("")
        setPassword("")
        setStreetAddress('')
        setPostcode("")
    

         successAlert.style.visibility="visible";
      })
      .catch((err) => {
        console.log("There was an error while creating an account " + err);
        successAlert.innerText="SignUp Failed"
        successAlert.className="alert alert-danger"
        successAlert.visibility="visible"
       
      });

    console.log("Signup form submitted");
    }
    catch(err){
      alert(err);
    }
  

  };

  return (
    <div>
      <div
      id="successAlert"
        style={{ visibility: "hidden" }}
        className="alert alert-primary"
        role="alert"
      >
      Registration Successful
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          margin: "50px auto",
          width: "80%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          borderImage: "linear-gradient(to right, yellow, blue) 1",
        }}
      >
        <form
          id="signupForm"
          style={{
            width: "80%",
            alignItems: "center",
          }}
          onSubmit={handleSignup}
        >
          <div className="heading">
            <h3>Sign Up</h3>
            <br />
          </div>
          <div className="form-row">
            <div className="form-group my-2 col-md-6">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fName"
                placeholder="First Name"
                required
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lName"
                placeholder="Last Name"
                required
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                required
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                className="form-control"
                id="streetAddress"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="buildingNumber">Building Number</label>
              <input
                type="text"
                className="form-control"
                id="buildingNumber"
                placeholder="Building Number"
                value={buildingNumber}
                onChange={(e) => setBuildingNumber(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-6">
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                className="form-control"
                id="postcode"
                placeholder="Postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-8">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <div>
              <p style={{ margin: "4px" }}>
                Already have an account? Click here to{" "}
                <Link to="/login">
                  <span
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
