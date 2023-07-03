import React, { useState } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setOtp(otp + value);
  };

  return (
    <div>
      {Array(6).fill('').map((_, index) => (
        <input
          type="number"
          value={otp[index]}
          onChange={handleChange}
          key={index}
        />
      ))}
    </div>
  );
};

export default OtpInput;