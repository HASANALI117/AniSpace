import React, { useState } from 'react';
import './style.css';
const FilmPoster = ({ posterUrl, movieTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={isHovered ? 'poster-hovered' : 'poster'}
      style={{
        width: '200px',
        height: '300px',
        margin: '10px',
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={posterUrl} alt={movieTitle} />
      <h3
        className={isHovered ? 'title-hovered' : 'title'}
        // This will hide the title when the mouse is not over the poster
        style={isHovered ? {} : { display: 'none' }}
      >
        {movieTitle}
      </h3>
    </div>
  );
};
export default FilmPoster;