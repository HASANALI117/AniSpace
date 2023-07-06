import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../UserProfile/style.css';

const UserProfile = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

 
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Go to the OTP page to verify the changes
    const res = await axios.post("/api/users/profile/update", data);
    if (res.data.success) {
      // The changes have been made, redirect the user to the home page
      window.location.href = "/";
    } else {
      // The changes have not been made, show an error message
      alert(res.data.message);
    }
  };

  return (
    <div class="formuserprofile">
      <h1>User Profile</h1>
      <form class="formformuser" onSubmit={handleSubmit}>
        <input class ="userprofileinput"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          required
        />
        <input class ="userprofileinput"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
          required
        />
        <input class ="userprofileinput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <input class ="userprofileinput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />
        <input class ="userprofileinput"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
          required
        />
        <button class="buttonupdateuserprofile" type="submit">Update Profile</button>
      </form>
      <Link to="/" class="backtohome">Back to Home</Link>
    </div>
  );
};
export default UserProfile;