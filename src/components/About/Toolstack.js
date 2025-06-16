import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos size={40} />, label: 'macOS' },
    { icon: <SiVisualstudiocode size={40} />, label: 'VS Code' },
    { icon: <SiPostman size={40} />, label: 'Postman' },
    { icon: <SiSlack size={40} />, label: 'Slack' },
    { icon: <SiVercel size={40} />, label: 'Vercel' },
  ];

  return (
    <Row className="justify-content-center" style={{ paddingBottom: '50px' }}>
      {tools.map((tool, idx) => (
        <Col
          key={idx}
          xs={6} sm={4} md={2}
          className="d-flex flex-column align-items-center mb-4"
        >
          {tool.icon}
          <span className="mt-2" style={{ fontWeight: 500 }}>
            {tool.label}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
