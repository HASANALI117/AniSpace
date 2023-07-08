import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../signin.css";

export default function Signin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/auth/signin";
      const res = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      navigate("/");
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
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            {error && <div className="error_msg">{error}</div>}
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              className="input"
            />
            <button type="submit" className="button_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
