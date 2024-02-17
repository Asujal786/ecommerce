import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Profile(props) {
  const tokenData = localStorage.getItem("token");
  const decode = jwtDecode(tokenData);
  const id = decode.id;

  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    buildingNumber: "",
    city: "",
    postcode: ""
  });

  useEffect(() => {
    axios
      .put(`http://localhost:5000/users/profile/${id}`, user).then((res)=>console.log(res.data))
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/user/profile/${id}`, user)
      .then((res) => {
        console.log(res.data); 
      })
      .catch((err) => {
        console.log(err); 
      });
  };

  return (
    <div className="Account-Page">
      <h4 className="page-heading"> Account </h4>
      <form
        id="ProfileForm"
        style={{
          width: "80%",
          alignItems: "space-between",
          margin: "auto",
          justifyContent: "center",
          borderImage: "linear-gradient(to right, yellow, blue) 1",
          border: "1px solid"
        }}
        onSubmit={handleSubmit}
      >
    
        <div className="form-group my-2 col-md-6">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fName"
            name="fName"
            placeholder="First Name"
            value={user.fName}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group my-2 col-md-6">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lName"
            name="lName"
            placeholder="Last Name"
            value={user.lName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group my-2 col-md-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group my-2 col-md-6">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={user.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group my-2 col-md-6">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            className="form-control"
            id="streetAddress"
            name="streetAddress"
            placeholder="Street Address"
            value={user.streetAddress}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group my-2 col-md-6">
          <label htmlFor="buildingNumber">Building Number</label>
          <input
            type="text"
            className="form-control"
            id="buildingNumber"
            name="buildingNumber"
            placeholder="Building Number"
            value={user.buildingNumber}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group my-2 col-md-6">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            value={user.city}
            onChange={handleChange}
          />
        </div>
   
        <div className="form-group my-2 col-md-6">
          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            className="form-control"
            id="postcode"
            name="postcode"
            placeholder="Postcode"
            value={user.postcode}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group my-2 col-md-8">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
