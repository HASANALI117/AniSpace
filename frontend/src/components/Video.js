import React, { useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";

export default function App() {
  return (
    <HoverVideoPlayer
      videoSrc="https://anispace.s3.me-south-1.amazonaws.com/jjk.mp4"
      pausedOverlay={
        <img
          src="https://images5.alphacoders.com/606/606284.jpg"
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
  );
}
