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
        variant="dark"
        className="Nav"
      >
        <Navbar.Brand href="/">The Laceless Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/demo">Demo</Nav.Link>
            <Nav.Link href="/shoes">Shoes</Nav.Link>
            <Nav.Link href="/stores">Stores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navy;
