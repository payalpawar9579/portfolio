import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg"; // Replace with your image
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
        id="home"
      >
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center justify-content-center">
            <Col md={7} className="home-header text-center text-md-start">
              <h1 className="heading mb-3">
                Hi there!{' '}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name mb-4">
                I'M{' '}
                <strong className="main-name">Payal Sunil Pawar</strong>
              </h1>

              <div style={{ padding: 20, textAlign: 'center' }} className="text-center text-md-start">
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
