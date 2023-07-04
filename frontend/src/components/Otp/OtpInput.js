import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import '../Otp/OtpInput.css';

export default function App() {
  const [otp, setOtp] = useState('');

  return (
    <div class="otp">
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span> </span>}
      renderInput={(props) => <input {...props} />}
      
    />
    </div>
  );
}