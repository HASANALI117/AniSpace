import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

// Pages
import Home from "./components/Home";
import Signin from "./components/Signin";
import NavigationBar from "./components/NavigationBar";
import Forums from "./components/Forums";
import Anime from "./components/Anime";
import Search from "./components/Search";
import AnimeDetails from "./components/AnimeDetails";
import Movie from "./components/Movie";
import Signup from "./components/Signup";
import PageError from "./components/PageError/PageError";

// Styles
import "./index.css";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState([]);

  const [isAuth, setIsAuth] = useState(false); // user is logged in or not
  const [user, setUser] = useState({}); // Contain User, if any.

  useEffect(() => {
    console.log("App.js");
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = jwt_decode(token);
      console.log(user);

      if (user) {
        setIsAuth(true);
        setUser(user);
      } else if (!user) {
        localStorage.remove("token");
        setIsAuth(false);
      }
    }
  }, [window.location.pathname]);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const searchOnChangeHandler = (e) => {
    console.log(e.target.value);
    if (location.pathname !== "/search") {
      navigate("/search");
    }
    if (e.target.value === "") {
      navigate("/");
    }
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${e.target.value}&sfw`)
      .then((response) => {
        console.log(response.data.data);
        setResults(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const debouncedSearchOnChangeHandler = debounce(searchOnChangeHandler, 500);

  return (
    <>
      <NavigationBar
        search={debouncedSearchOnChangeHandler}
        isAuth={isAuth}
        user={user}
        logout={logout}
      />

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime-details" element={<AnimeDetails />} />
        <Route path="/search" element={<Search results={results} />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}
