import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
        <h3 className="carousel-title">Current Season</h3>
        <div>
          <Carousel
            // centerMode={true}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="3 .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {animeCards}
          </Carousel>
        </div>
      </div>
    );
  }
}
