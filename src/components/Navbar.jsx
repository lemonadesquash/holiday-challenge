import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function ComponentNavbar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to='/about'>About</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to='/portfolio'>Portfolio</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
