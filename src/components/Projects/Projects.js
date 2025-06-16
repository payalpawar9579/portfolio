import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="text-center" style={{ padding: '50px 0' }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: 'white', fontSize: '1.2em' }}>
          Updating Soon
        </p>
      </Container>
    </Container>
  );
}

export default Projects;