import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddNewList from "./AddNewList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AnimeList() {
  const [isAddListClicked, setIsAddListClicked] = useState(false);
  const [isAddOneListClicked, setIsAddOneListClicked] = useState(false);

  const handleAddOneListClick = () => {
    setIsAddOneListClicked(!isAddOneListClicked);
  };

  const list = ["List 1", "List 2", "List 3"].map((listitem) => (
    <Row style={{ marginBottom: "1rem" }}>
      <Col>
        <Button
          variant="dark"
          style={{ width: "100%", backgroundColor: "#424649" }}
        >
          {listitem}
        </Button>
      </Col>
      <Col>
        <Button
          variant="dark"
          style={{ width: "100%", backgroundColor: "#424649" }}
          onClick={handleAddOneListClick}
        >
          <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
        </Button>
      </Col>
    </Row>
  ));

  const handleAddListClick = () => {
    setIsAddListClicked(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "90%",
        bottom: "7%",
        zIndex: "1",
      }}
    >
      {isAddListClicked ? (
        <AddNewList />
      ) : (
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#3c4048",
            border: "1px solid white",
          }}
        >
          <Card.Body>
            <Card.Title>Add to List</Card.Title>
            <Card.Text>
              <div>
                <Container>{list}</Container>
              </div>
            </Card.Text>
            <Button variant="primary" onClick={handleAddListClick}>
              Add New List
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
