import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import CardsCarousel from "./CardsCarousel";
import Loading from "./Loading";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function Home(props) {
  const [airingAnimeList, setAiringAnimeList] = useState([]);
  const [faveAnimeList, setFaveAnimeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwtDecode(token);

      axios
        .get(
          `http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/list/${user.user.favListId}/items`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setFaveAnimeList(res.data.items);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }

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

      {props.isAuth ? (
        <CardsCarousel animeList={faveAnimeList} carouselTitle={"Favorites"} />
      ) : null}
    </div>
  );
}
