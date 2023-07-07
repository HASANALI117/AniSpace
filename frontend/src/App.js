import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Pages
import Home from "./components/Home";
import Signin from "./components/Signin";
import NavigationBar from "./components/NavigationBar";
import Forums from "./components/Forums";
import Anime from "./components/Anime";
import Search from "./components/Search";
import AnimeDetails from "./components/AnimeDetails";
import Movie from "./components/Movie";

// Styles
import "./index.css";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState([]);

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
      <NavigationBar search={debouncedSearchOnChangeHandler} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime-details" element={<AnimeDetails />} />
        <Route path="/search" element={<Search results={results} />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </>
  );
}
