import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I’m <span className="purple">Payal Sunil Pawar</span>, a passionate Fourth Year Computer Engineering student at <span className="purple">Pimpri Chinchwad College of Engineering, Pune</span>.
            <br />
            Over the years, I’ve maintained a strong academic record with a current CGPA of <span className="purple">8.1</span> and excelled in projects and internships focused on <span className="purple">AI/ML</span>, <span className="purple">Cloud Computing (AWS & Azure)</span>, and <span className="purple">Full-Stack Web Development</span>.
            <br />
            I’ve also completed the <span className="purple">AICTE Microsoft Azure Virtual Internship</span>, where I built computer vision solutions, worked with generative AI models, and honed my skills in prompt design and Azure ML.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building and deploying AI/ML projects (e.g., credit card fraud detection, price prediction)
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in and winning hackathons (Winner, Smart India Hackathon 2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical blogs and sharing knowledge on React, Python, and Cloud
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing moments through photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and leave a lasting impact."
          </p>
          <footer className="blockquote-footer">Payal Sunil Pawar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
