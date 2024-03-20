import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate(); 


  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/login", { email, password });
      console.log("Login Data has been submitted");
      setLoginError(null); 
      const token = response.data.token;
      localStorage.setItem("token", token);

      const decodeToken= parseJwt(token); 


      const isAdmin= decodeToken.isAdmin;
      console.log(isAdmin);
      console.log(decodeToken);

      navigate('/');
    } catch (error) {
      console.log("There has been an error while sending the login data back to the server");
      setLoginError("Invalid Credentials");
    }
  };
   
  return (
    <div>
      <div className="container"
        style={{
          display: "flex",
          margin: "50px auto",
          width: "80%",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          borderImage: "linear-gradient(to right, yellow, blue) 1",
        }}
      >
        <form
          id="loginform"
          onSubmit={handleLogin}
          style={{
            width: "80%",
            alignItems: "center",
          }}
        >
          <div className="heading">
            <h3> Login</h3>
            <br />
          </div>
          <div className="form-row">
            <div className="form-group my-2 col-md-8">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2 col-md-8">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <p style={{ margin: "4px" }}>
                Don't have an Account? Click here to{" "}
                <Link to="/signup">
                  <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                    SIGN UP
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {loginError && (
            <div className="alert alert-danger" role="alert">
              {loginError}
            </div>
          )}

          <button
            type="submit"
            id="loginsubmit"
            className="btn btn-primary my-2"
            style={{
              marginTop: "16px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
