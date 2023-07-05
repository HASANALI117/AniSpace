import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function CurrentSeasonCarousel() {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        console.log(response.data.data);
        setAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (animeList.length === 0) {
    return <div>Loading...</div>;
  } else {
    const animeCards = animeList.map((anime) => (
      <AnimeCard key={anime.mal_id} anime={anime} />
    ));

    return (
      <div>
        <div className="carousel-title">Current Season</div>
        <Carousel
          style={{
            width: "100%",
            height: "25%",
            display: "flex",
            justifyContent: "space-between",
          }}
          show={6.5}
          slide={3}
          transition={0.5}
          leftArrow={
            <RxDoubleArrowLeft
              size={70}
              style={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          }
          rightArrow={
            <RxDoubleArrowRight
              size={70}
              style={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          }
        >
          {animeCards}
        </Carousel>
      </div>
    );
  }
}
