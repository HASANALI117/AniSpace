import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class TopAnime extends Component {
  render() {
    return (
      <div className="top-anime">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/81rPC0owmrL.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
