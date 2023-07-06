import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilmPoster from './components/FilmPoster';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <div>
      {movies.map((movie) => (
        <FilmPoster key={movie.movieTitle} posterUrl={movie.posterUrl} movieTitle={movie.movieTitle} />
      ))}
    </div>

    </div>
  );
}

export default App;
