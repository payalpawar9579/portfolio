import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Payal Sunil Pawar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PSP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/payalpawar9579"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* Twitter */}
            <li className="social-icons">
              <a
                href="https://twitter.com/your_twitter_handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="www.linkedin.com/in/payal-pawar-357243288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/payal_pixelize/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
