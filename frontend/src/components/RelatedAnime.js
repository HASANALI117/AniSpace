import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimeCard from "./AnimeCard";

export default function RelatedAnime(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
        margin: "0 auto",
        padding: "2rem 0",
        height: "48vh",
        width: "17vw",
      }}
    >
      <AnimeCard
        key={anime.entry.mal_id}
        anime={anime.entry}
        id={anime.entry.mal_id}
      />
    </div>
  ));
  console.log(props.animeList);
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
