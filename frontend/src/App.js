import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup/index";
import Login from "./components/Login";
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
		</Routes>
	);
}

export default App;
