import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import TopAnime from "./TopAnime";

export default class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 carousel"
              src="https://images5.alphacoders.com/606/606284.jpg"
              alt="First slide"
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

        <div>
          <TopAnime />
        </div>
      </div>
    );
  }
}
