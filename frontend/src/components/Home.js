import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CurrentSeasonCarousel from "./CurrentSeasonCarousel";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Anime</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <CurrentSeasonCarousel />
      </div>
    );
  }
}
