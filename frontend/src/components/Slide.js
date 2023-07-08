import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import HoverVideoPlayer from "react-hover-video-player";

export default class Slide extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <a href={`/anime-details?id=21`}>
                <HoverVideoPlayer
                  videoSrc="https://anispace.s3.me-south-1.amazonaws.com/OnePiece.mp4"
                  muted={false}
                  restartOnPaused={true}
                  pausedOverlay={
                    <img
                      className="d-block w-100 carousel"
                      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe"
                      alt=""
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </a>
              <Carousel.Caption style={{ marginBottom: "0.5rem" }}>
                <h3>One Piece</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href={`/anime-details?id=52299`}>
                <HoverVideoPlayer
                  videoSrc="https://anispace.s3.me-south-1.amazonaws.com/Solo.mp4"
                  muted={false}
                  restartOnPaused={true}
                  pausedOverlay={
                    <img
                      className="d-block w-100 carousel"
                      src="https://sgimage.netmarble.com/images/netmarble/sololv/20230313/r20w1678676611229.jpg"
                      alt=""
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </a>
              <Carousel.Caption style={{ marginBottom: "0.5rem" }}>
                <h3>Solo leveling</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href={`/anime-details?id=37521`}>
                <HoverVideoPlayer
                  videoSrc="https://anispace.s3.me-south-1.amazonaws.com/Vinland.mp4"
                  muted={false}
                  restartOnPaused={true}
                  pausedOverlay={
                    <img
                      className="d-block w-100 carousel"
                      src="https://fictionhorizon.com/wp-content/uploads/2022/02/Vinland-Saga-Featured-and-Social-Media-Image-1.jpg-1.jpg"
                      alt=""
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </a>
              <Carousel.Caption style={{ marginBottom: "0.5rem" }}>
                <h3>Vinland Saga</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href={`/anime-details?id=40028`}>
                <HoverVideoPlayer
                  videoSrc="https://anispace.s3.me-south-1.amazonaws.com/AOT.mp4"
                  muted={false}
                  restartOnPaused={true}
                  pausedOverlay={
                    <img
                      className="d-block w-100 carousel"
                      src="https://flxt.tmsimg.com/assets/p10701949_b_h10_ah.jpg"
                      alt=""
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </a>
              <Carousel.Caption style={{ marginBottom: "0.5rem" }}>
                <h3>Attack on Titan</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href={`/anime-details?id=40028`}>
                <HoverVideoPlayer
                  videoSrc="https://anispace.s3.me-south-1.amazonaws.com/Chainsaw_Man_sfw.mp4"
                  muted={false}
                  restartOnPaused={true}
                  pausedOverlay={
                    <img
                      className="d-block w-100 carousel"
                      src="https://www.cheatsheet.com/wp-content/uploads/2022/08/Chainsaw-Man-Anime.jpg"
                      alt=""
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </a>
              <Carousel.Caption style={{ marginBottom: "0.5rem" }}>
                <h3>Chainsaw Man</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
