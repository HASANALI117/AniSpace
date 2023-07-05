import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimeCard from "./AnimeCard";
import TopAnime from "./TopAnime";
import { useState, useRef } from "react";

export default function TrailerSlide(props) {
  //   const [selectedSlide, setSelectedSlide] = useState(0);
  const carousel1Ref = useRef();
  const carousel2Ref = useRef();

  const handleSlideChange = (newIndex) => {
    // setSelectedSlide(newIndex);
    console.log(newIndex);
    carousel2Ref.current.goToSlide(newIndex + 1);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const trailers = [
    {
      trailer: "https://anispace.s3.me-south-1.amazonaws.com/jjk.mp4",
      thumbnail: "https://images5.alphacoders.com/606/606284.jpg",
    },
    {
      trailer: "https://anispace.s3.me-south-1.amazonaws.com/jjk.mp4",
      thumbnail: "https://wallpaperaccess.com/full/36626.jpg",
    },
    {
      trailer: "https://anispace.s3.me-south-1.amazonaws.com/jjk.mp4",
      thumbnail:
        "https://wallpapers.com/images/featured/naruto-shippuden-background-rxxyiybobk8m0q7u.jpg",
    },
  ];

  const trailerSlides = trailers.map((item) => (
    <div className="trailer-carousel-slide">
      <HoverVideoPlayer
        className="trailer-carousel-video"
        videoSrc={item.trailer}
        pausedOverlay={
          <img
            src={item.thumbnail}
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    </div>
  ));

  console.log(trailerSlides);

  return (
    <div>
      <div style={{ width: "60vw" }}>
        <Carousel
          ref={carousel1Ref}
          afterChange={handleSlideChange}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          deviceType={props.deviceType}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {trailerSlides}
        </Carousel>
      </div>

      <div>
        <Carousel
          ref={carousel2Ref}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          deviceType={props.deviceType}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
        >
          <div>
            <TopAnime />
          </div>
          <div>
            <TopAnime />
          </div>
          <div>
            <TopAnime />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
