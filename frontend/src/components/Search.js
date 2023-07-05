import React from "react";
import AnimeCard from "./AnimeCard";

export default function Search(props) {
  const resultsCards = props.results.map((anime) => (
    <div
      style={{
        margin: "0 20px",
        padding: "2rem 0",
        height: "37vh",
        width: "11vw",
      }}
    >
      <AnimeCard key={anime.mal_id} anime={anime} />
    </div>
  ));

  return (
    <div style={{ display: "flex", flexFlow: "wrap" }}>{resultsCards}</div>
  );
}
