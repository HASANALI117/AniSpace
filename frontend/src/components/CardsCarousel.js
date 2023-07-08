import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimeCard from "./AnimeCard";

export default function CurrentSeasonCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const animeCards = props.animeList.map((anime) => (
    <div
      style={{
        margin: "0 20px",
        padding: "2rem 0",
        height: "48vh",
        width: "17vw",
      }}
    >
      <AnimeCard key={anime.mal_id} anime={anime} id={anime.mal_id} />
    </div>
  ));

  return (
    <div>
      <div className="carousel-title">{props.carouselTitle}</div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
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
    </div>
  );
}
