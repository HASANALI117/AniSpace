import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NavigationBar(props) {
  const handleLogout = (e) => {
    props.logout(e);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#212529" }}
      >
        <Container style={{ marginLeft: "0" }}>
          <Navbar.Brand href="/">AniSpace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/anime">Anime</Nav.Link>
              <Nav.Link href="/movie">Movie</Nav.Link>
              <Nav.Link href="/forums">Forums</Nav.Link>
              {props.isAuth ? null : (
                <Nav.Link href="/signin">Sign In</Nav.Link>
              )}
              {props.isAuth ? (
                <NavDropdown
                  title={`${props.user.user.name}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/">Lists</NavDropdown.Item>
                  <NavDropdown.Item href="/">Settings</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => props.search(e)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
