import React from "react";
import axios from "axios";
import { useState } from "react";
import CardsCarousel from "./CardsCarousel";
import { useEffect } from "react";
import Loading from "./Loading";

export default function Anime() {
  const [anime, setAnime] = useState({});

  useEffect(() => {
    console.log(anime);
  }, [anime]);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const genres = [
      "Action",
      "Sports",
      "Award Winning",
      "Drama",
      "Mystery",
      "Romance",
      "Comedy",
      "Adventure",
      "Fantasy",
      "Sci-Fi",
      "Slice of Life",
    ].sort(() => Math.random() - 0.5);

    const requests = genres.map((genre) =>
      axios.get(
        `http://ec2-15-185-195-60.me-south-1.compute.amazonaws.com:4000/anime/${genre}`
      )
    );

    Promise.all(requests)
      .then((res) => {
        console.log(res.data);
        for (const genreIndex in genres) {
          setAnime((prevAnime) => ({
            ...prevAnime,
            [genres[genreIndex]]: res[genreIndex].data.results.sort(
              () => Math.random() - 0.5
            ),
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const fetchData = async () => {
      try {
        const airing = await axios.get(
          "https://api.jikan.moe/v4/top/anime?type=tv&sfw&filter=airing"
        );
        setAnime((prevAnime) => ({
          "Top Airing": airing.data.data,
          ...prevAnime,
        }));

        await delay(333); // Delay before making the second call

        const favorite = await axios.get(
          "https://api.jikan.moe/v4/top/anime?type=tv&sfw&filter=favorite"
        );
        setAnime((prevAnime) => ({
          "Fan Favorite": favorite.data.data,
          ...prevAnime,
        }));

        await delay(333); // Delay before making the third call

        const popular = await axios.get(
          "https://api.jikan.moe/v4/top/anime?type=tv&sfw&filter=bypopularity"
        );
        setAnime((prevAnime) => ({
          "Most Popular": popular.data.data,
          ...prevAnime,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (Object.keys(anime).length < 14) {
    return <Loading />;
  }

  return (
    <div>
      {Object.entries(anime).map(([genre, animeList]) => (
        <CardsCarousel
          key={genre}
          carouselTitle={genre}
          animeList={animeList}
        />
      ))}
    </div>
  );
}
