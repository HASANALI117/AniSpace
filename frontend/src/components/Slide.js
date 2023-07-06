import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import TopAnime from "./TopAnime";

export default class Slide extends Component {
  render() {
    return (
      <div className="slide">
        <div>
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
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 carousel"
                src="https://wallpaperaccess.com/full/36626.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Attack on Titan</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 carousel"
                src="https://wallpapers.com/images/featured/naruto-shippuden-background-rxxyiybobk8m0q7u.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Naruto Shippuden</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 carousel"
                src="https://i.pinimg.com/originals/4e/f4/9f/4ef49fa405a4973e1682c7fcdc68fe1c.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>One Punch Man</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel"
                src="https://wallpapers.com/images/hd/vinland-saga-pictures-dikxzidsazb3dqzm.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Vinland Saga</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <TopAnime />
        </div>
      </div>
    );
  }
}
