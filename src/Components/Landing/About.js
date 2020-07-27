import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about" id="about">
      <legend className="greet">Hi, I'm Subhasis</legend>
      <Container>
        <Row>
          <Col sm="6">
            <lottie-player
              src="https://assets9.lottiefiles.com/private_files/lf30_WdTEui.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </Col>
          <Col sm="6">
            <p className="about-text">
              I'm a full stack web developer, cloud and devops engineer and
              blockchain and ML enthusiast. I have over two years of experience,
              which is inclusive of personal projects, freelancing and
              internships.
            </p>
            <p className="about-text">
              I'm an undergrad from Kolkata. I'm currently pursuing B.Tech in
              Computer Science & Engingeering from{" "}
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
              I love exploring new technologies and using them to build
              applications to solve real world problems.
            </p>
            <p className="about-text">
              I am also a believer of open source and community spirit. I'm
              associated with{" "}
              <a
                href="https://dschit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSC HIT
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
              To hire me, collaborate with me or simply get in touch, feel free
              to <a href="/contact">contact</a> me :)
            </p>
          </Col>
          <Col sm="6" className="text-center">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_foZ22A.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
