import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/index";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Login";
// import OTPPage from "./components/OTPPage";
// import EmailVerify f§rom "./components/EmailVerify";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{/* <Route path="/users/:id/verify/:token" element={<EmailVerify />} /> */}
			<Route path="/profile" exact element={<UserProfile/>} />
        	{/* <Route path="/otp" exact component={OTPPage} /> */}
       	 	<Route path="/" />
		</Routes>
	);
}

export default App;
