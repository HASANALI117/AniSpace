import React, { Component } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Carousel from "react-bootstrap/Carousel";

export default class Video extends Component {
  render() {
    return (
      <>
        <Carousel
          style={{
            width: "800px",
            height: "400px",
            // margin: "20px auto",
          }}
          className="video-slide"
        >
          <Carousel.Item interval={1000}>
            <HoverVideoPlayer
              videoSrc="https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/e70531e080e643365cd005ff8da570ce.mp4"
              muted={false}
              volume={0.5}
              restartOnPaused={true}
              pausedOverlay={
                <img
                  src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe"
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
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <HoverVideoPlayer
              videoSrc="https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/44959005b220453c3f6593280f25518b.mp4"
              muted={false}
              volume={0.5}
              restartOnPaused={true}
              pausedOverlay={
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.vcgamers.com/news/wp-content/uploads/2022/12/Solo-Leveling-1.png"
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
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
