import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../signup.css";

export default function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/auth/signup";
      const res = await axios.post(url, data);
      navigate("/signin");
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left-signup">
          <h1>Welcome Back</h1>
          <Link to="/signin">
            <button type="button" className="white_btn-signup">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right-signup">
          <form className="form_container-signup" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            {error && <div className="error_msg-signup">{error}</div>}
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              //   value={data.firstName}
              required
              className="input-signup"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              //   value={data.lastName}
              required
              className="input-signup"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              //   value={data.email}
              required
              className="input-signup"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              //   value={data.password}
              required
              className="input-signup"
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              //   value={data.phoneNumber}
              required
              className="input-signup"
            />
            {/* {error && <div className="error_msg">{error}</div>}
            {msg && <div className="success_msg">{msg}</div>} */}
            <button type="submit" className="button_btn-signup">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
