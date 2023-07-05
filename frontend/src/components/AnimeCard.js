import React, { useState } from "react";

export default function AnimeCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const overlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: isExpanded ? "50%" : "25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    transition: "height 0.5s",
    display: "flex",
    flexDirection: "column",
    justifyContent: isExpanded ? "space-between" : "flex-end",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "left",
  };

  const titleStyle = {
    color: "white",
    fontSize: "1.5vh",
    fontWeight: "bold",
    marginBottom: "5px",
    textAlign: "center",
  };

  const ratingStyle = {
    color: "white",
    fontSize: "1vhm",
    marginBottom: "5px",
  };

  const genreStyle = {
    color: "white",
    fontSize: "1rem",
    marginBottom: "5px",
    textAlign: "left",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={props.anime.images.jpg.image_url}
        alt={props.anime.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={overlayStyle}>
        <div style={titleStyle}>{props.anime.title}</div>
        {isExpanded && (
          <div>
            <div style={ratingStyle}>Rating: {props.anime.score}</div>
            <div style={genreStyle}>
              Genres: {props.anime.genres.map((genre) => genre.name).join(", ")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
