import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import { NavbarContainer, LogoContainer, LogoImg } from "./navbar.styles";
import "./navbar.styles.scss";

import Logo from "../../assets/images/profile.jpg";

const NavbarBootStrap = () => (
  <NavbarContainer>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 mt-lg-0 mt-md-0 mt-sm-0 mx-5"
            style={{ maxHeight: "70px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link
                style={{
                  
                  textTransform: "capitalize"
                }}
                className="Link-a"
              >
                TRIPS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  
                  textTransform: "capitalize"
                }}
                className="Link-a"
              >
                RECENTLY VIEWED
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{
                  
                  textTransform: "capitalize"
                }}
                className="Link-a"
              >
                BOOKINGS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <LogoContainer to="/">
                <LogoImg src={Logo} style={{ width: "40px" }} />
              </LogoContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </NavbarContainer>
);

export default NavbarBootStrap;
