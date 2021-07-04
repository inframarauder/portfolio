import React from "react";
import Lottie from "react-lottie";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import aboutLottie from "../lotties/about-lottie.json";
import developerLottie from "../lotties/developer-lottie.json";

const About = () => {
  return (
    <div className="my-4">
      <Row>
        <Col
          lg={6}
          md={6}
          sm={12}
          className={`bg-striped ${styles.imgContainer}`}
        >
          <img src="/images/me.jpg" alt="me" className={styles.image} />
          <div className="text-center my-2">
            <h2>Hi, I'm Subhasis &#x1F604; </h2>
            <h5>Full Stack Web and App Developer</h5>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: developerLottie,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={300}
              height={300}
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className={styles.aboutContainer}>
            <h2 className="text-center my-4">
              <u>ABOUT ME</u>
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              I am a B.Tech(CSE) graduate (2021) from{" "}
              <a
                href="https://www.heritageit.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heritage Institute of Technology, Kolkata
              </a>{" "}
              currently working at{" "}
              <a
                href="https://www.tcs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tata Consultancy Services
              </a>{" "}
              as a Systems Engineer. Primarily full stack web and app developer,
              I love writing code to build solutions to real world problems.
              Over the last 4 years, I have worked in 4 companies (one of them
              being my own &#128521;), participated in 3 hackathons (and won one
              of them &#128522;) and built numerous side projects!
            </p>

            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: aboutLottie,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={300}
              height={300}
            />

            <p style={{ fontSize: "1.2rem" }}>
              I make efforts to remain relevant to the fast changing and
              evolving industry by constantly upksilling. I am also a strong
              beliver and supporter of open source/student tech communities. I
              was formerly associated with{" "}
              <a
                href="https://dschit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSC,HIT
              </a>{" "}
              and{" "}
              <a
                href="https://gdg.community.dev/gdg-kolkata/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDG Kolkata.
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
