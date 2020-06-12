import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <legend className="greet">Hi, I'm Subhasis</legend>
      <Container>
        <Row>
          <Col md="auto">
            <img src="/images/about.svg" alt="aboutimg" className="about-img" />
          </Col>
          <Col md="auto">
            <p className="about-text">
              I'm an undergraduate student from Kolkata. I currently pursuing
              B.Tech in Computer Science and Engineering from Heritage Institute
              of Technology.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
