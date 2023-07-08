import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [otp, setOtp] = useState("");

  const { phoneNumber } = useParams();

  const navigate = useNavigate();

  console.log(phoneNumber);

  const handleClick = () => {
    const url =
      "http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/auth/verify/phone";

    axios
      .post(url, { phoneNumber: phoneNumber, otp: otp })
      .then((res) => {
        console.log(res);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(otp);
  }, [otp]);

  useEffect(() => {
    const url =
      "http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/auth/send/otp";

    axios
      .post(url, { phoneNumber: phoneNumber })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        margin: "10rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Enter Verification Code</h1>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: "5rem",
          height: "5rem",
          margin: "0 1rem",
          borderRadius: "10px",
          fontSize: "2rem",
        }}
      />
      <Button
        variant="primary"
        style={{ width: "10%", marginTop: "2.5rem" }}
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
}
