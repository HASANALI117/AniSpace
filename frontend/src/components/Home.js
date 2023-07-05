import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Video from "./Video";
import CardsCarousel from "./CardsCarousel";
import axios from "axios";

export default function Home() {
  const [airingAnimeList, setAiringAnimeList] = useState([]);
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        console.log(response.data.data);
        setAiringAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });

    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        console.log(response.data.data);
        setTopAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (airingAnimeList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Video /> */}
      <Slide />
      <CardsCarousel
        animeList={airingAnimeList}
        carouselTitle={"Current Season"}
      />
      <CardsCarousel animeList={topAnimeList} carouselTitle={"Top Anime"} />
    </div>
  );
}
