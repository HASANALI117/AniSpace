import React from "react";

export default function AnimeCard(props) {
  return (
    <div>
      <img
        src={props.anime.images.jpg.large_image_url}
        alt={props.anime.titles[0].title}
      />
    </div>
  );
}
