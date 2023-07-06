import React, { Component } from "react";
import Slide from "./Slide";
import CurrentSeasonCarousel from "./CurrentSeasonCarousel";
import Video from "./Video";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Slide /> */}
        <Video />
        <CurrentSeasonCarousel />
      </div>
    );
  }
}
