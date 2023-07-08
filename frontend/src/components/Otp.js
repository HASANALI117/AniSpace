import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "react-bootstrap/Button";

export default function App() {
  const [otp, setOtp] = useState("");

  const handleClick = () => {
    console.log(otp);
  };
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
