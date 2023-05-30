import React from "react";
import { Link } from "react-router-dom";

// Bootstrap Components
import { Navbar, Container, Nav } from "react-bootstrap";

// Styles
import "./styles.css";

// Assets
import webAcademyLogo from "../../assets/images/webacademylogo.png";

function NavBar({ pages, selectedPage, setSelectedPage }) {
  const handleLinkClick = (path) => {
    setSelectedPage(path);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <img
          src={webAcademyLogo}
          className="justify-content-left"
          alt="Logo Web Academy"
          width={275}
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {pages.map((page, index) => (
              <Nav.Item key={index}>
                <Link
                  to={page.path}
                  className={`nav-link ${
                    selectedPage === page.path ? "selected" : ""
                  }`}
                  onClick={() => handleLinkClick(page.path)}
                >
                  {page.name}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
