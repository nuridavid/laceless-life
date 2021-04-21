import React from "react";
import "./Navbar.scss";
import { Navbar, Nav } from "react-bootstrap";

function Navy() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="light"
        className="Nav"
      >
        <Navbar.Brand href="/" id="header">
          The Laceless Life
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" id="menu">
              Home
            </Nav.Link>
            <Nav.Link href="/demo" id="menu">
              Demo
            </Nav.Link>
            <Nav.Link href="/shoes" id="menu">
              Shoes
            </Nav.Link>
            <Nav.Link href="/stores" id="menu">
              Stores
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navy;
