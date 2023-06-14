import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Typography from "../Typography";
import "./style.css";
import constants from "../../utils/constants";

function Footer() {
  return (
    <footer fluid className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <Typography className="h6">Mapa do Site</Typography>
            <Nav className="flex-column">
              {constants.PAGES.map((page, index) => (
                <Nav.Item key={index}>
                  <Link to={page.path}>{page.name}</Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col md={6}>
            <Typography className="h6">Instituto de Computação</Typography>
            <Typography className="p">
              Av. Gen. Rodrigo Octávio, 6200 UFAM - Setor Norte
              <br />
              Instituto de Computação, Térreo 69080-900 - Manaus - AM
              <br />
              <Link
                to="https://www.google.com/maps/place/Instituto+de+Computa%C3%A7%C3%A3o+-+IComp/@-3.0883653,-59.9668789,17z/data=!4m6!3m5!1s0x926c05202d6fcb1b:0x5bf3a6b7c3755c88!8m2!3d-3.0883653!4d-59.9646902!16s%2Fg%2F1ptwt_851?entry=ttu"
                target="_blank"
              >
                Localização no mapa
              </Link>
            </Typography>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
