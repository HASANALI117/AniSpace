import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";

export default function AddNewList() {
  return (
    <div>
      <Card
        style={{
          width: "30rem",
          height: "18rem",
          backgroundColor: "#3c4048",
          border: "1px solid white",
        }}
      >
        <Card.Body>
          <Card.Title>Add New List</Card.Title>
          <Form>
            <Form.Group>
              <FormLabel>Title</FormLabel>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                />
              </InputGroup>

              <FormLabel>Description</FormLabel>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                />
              </InputGroup>
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            style={{ position: "absolute", bottom: "1rem" }}
          >
            Add New List
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
