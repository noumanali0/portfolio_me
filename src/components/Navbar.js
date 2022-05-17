import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ position: "sticky", top: "0" }}
      >
        <Container>
          <Navbar.Brand href="home">
            <h4 className="font-weight-bold">Nouman</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                href="home"
                className="m-1 font-weight-bold"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollToTop();
                }}
              >
                <h5 className="font-weight-bold">Home</h5>
              </Nav.Link>
              <Nav.Link
                href="about"
                className="m-1"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollMore(650);
                }}
              >
                <h5 className="font-weight-bold">About</h5>
              </Nav.Link>
              <Nav.Link
                href="resume"
                className="m-1"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollMore(650);
                }}
              >
                <h5 className="font-weight-bold">Resume</h5>
              </Nav.Link>
              <Nav.Link
                href="contact"
                className="m-1"
                onClick={(e) => {
                  e.preventDefault();
                  scroll.scrollToBottom();
                }}
              >
                <h5 className="font-weight-bold">Contact</h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
