import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

export default function CurrentSeasonCarousel() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        console.log(response.data.data, typeof response.data.data);
        setAnimeList(response.data.data);
        console.log(response.data.data[0].images.jpg.large_image_url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Carousel show={5} slide={1} transition={0.5}>
      <div>
        <img
          src={animeList[0].images.jpg.large_image_url}
          alt={animeList[0].titles[0].title}
          style={{ width: "20%" }}
        />
      </div>
      <div>
        <img
          src={animeList[1].images.jpg.large_image_url}
          alt={animeList[1].titles[0].title}
          style={{ width: "20%" }}
        />
      </div>
      <div>
        <img
          src={animeList[2].images.jpg.large_image_url}
          alt={animeList[2].titles[0].title}
          style={{ width: "20%" }}
        />
      </div>
      <div>
        <img
          src={animeList[3].images.jpg.large_image_url}
          alt={animeList[3].titles[0].title}
          style={{ width: "20%" }}
        />
      </div>
    </Carousel>
  );
}
