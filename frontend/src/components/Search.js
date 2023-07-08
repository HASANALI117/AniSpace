import React from "react";
import AnimeCard from "./AnimeCard";

export default function Search(props) {
  const resultsCards = props.results.map((anime) => (
    <div
      style={{
        margin: "0 auto",
        padding: "2rem 0",
        height: "48vh",
        width: "17vw",
      }}
    >
      <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
    </div>
  ));

  return (
    <div style={{ display: "flex", flexFlow: "wrap" }}>{resultsCards}</div>
  );
}
