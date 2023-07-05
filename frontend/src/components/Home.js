import React, { Component } from "react";
import Slide from "./Slide";
import Video from "./Video";
import CardsCarousel from "./CardsCarousel";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Video /> */}
        <Slide />
        <CardsCarousel />
      </div>
    );
  }
}
