import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function CurrentSeasonCarousel(props) {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

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
      <div>
        <div className="carousel-title">Current Season</div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          deviceType={props.deviceType}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {animeCards}
        </Carousel>
        ;
      </div>
    );
  }
}
