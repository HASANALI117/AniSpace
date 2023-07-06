import React, { Component } from "react";
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
            <Card.Title>Vinland Saga</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
