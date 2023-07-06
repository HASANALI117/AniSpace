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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "left",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={props.anime.images.jpg.image_url}
        alt={props.anime.title}
        className="anime-image"
      />
      {/* <div style={overlayStyle}>
        <div className="anime-title">{props.anime.title}</div>
        {isExpanded && (
          <div>
            <div className="anime-rating">Rating: {props.anime.score}</div>
            <div className="anime-genre">
              Genres: {props.anime.genres.map((genre) => genre.name).join(", ")}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
