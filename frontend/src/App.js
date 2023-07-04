import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Signin from "./components/Signin";
import NavigationBar from "./components/NavigationBar";
import Forums from "./components/Forums";
import Anime from "./components/Anime";

// Styles
import "./index.css";

export default function App() {
  return (
    <>
      <NavigationBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </Router>
    </>
  );
}
