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
              <Carousel.Caption>
                <div className="carousel-cap">
                  <h3>One Piece</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 carousel"
                src="https://wallpaperaccess.com/full/36626.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Attack on Titan</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel"
                src="https://wallpapers.com/images/featured/naruto-shippuden-background-rxxyiybobk8m0q7u.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Naruto Shippuden</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
