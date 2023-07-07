import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import CardsCarousel from "./CardsCarousel";
import Loading from "./Loading";
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (airingAnimeList.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <Slide />

      <CardsCarousel
        animeList={airingAnimeList}
        carouselTitle={"Current Season"}
      />
    </div>
  );
}
