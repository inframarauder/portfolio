import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about" id="about">
      <legend className="greet">Hi, I'm Subhasis</legend>
      <Container>
        <Row>
          <Col sm="6">
            <img src="/images/about.svg" alt="about" />
          </Col>
          <Col sm="6">
            <p className="about-text">
              I'm a full stack web developer, cloud and devops engineer,
              programmer and blockchain enthusiast. I have over two years of
              work experience, which is inclusive of both - freelancing and
              internships.
            </p>
            <p className="about-text">
              I'm an undergraduate student from Kolkata. I'm currently pursuing
              B.Tech in Computer Science & Engingeering from{" "}
              <a
                href="https://heritageit.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heritage Institute of Technology, Kolkata
              </a>{" "}
              , with graduation due in 2021 .
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <p className="about-text">
              I keep learning and upgrading my tech skills, alongside my college
              academics to keep myself in touch with the latest demands and
              trends in the market.
            </p>
            <p className="about-text">
              I am also a believer of open source and community spirit. I'm
              associated with{" "}
              <a
                href="https://dschit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSC,HIT
              </a>{" "}
              and{" "}
              <a
                href="https://gdgkolkata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDG Kolkata
              </a>
            </p>
            <p className="about-text">
              If you want to hire me, collaborate with me or simply get in
              touch, feel free to <a href="/contact">contact</a> me :)
            </p>
          </Col>
          <Col sm="6" className="text-center">
            <img src="/images/image2.jpg" alt="talkimg" id="talkimg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
