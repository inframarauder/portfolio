import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import styles from "../styles/Home.module.css";
import developerLottie from "../lotties/developer-lottie.json";

const About = () => {
  return (
    <Container className="my-4">
      <Row className={styles.aboutContainer}>
        <h2 className="text-center my-4">
          <u>ABOUT ME</u>
        </h2>
        <Col sm={6}>
          <div className={styles.imgContainer}>
            <img src="/images/me.jpg" alt="me" className={styles.image} />
          </div>
        </Col>
        <Col sm={6}>
          <div className={styles.aboutTextContainer}>
            <p>
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
              as a Systems Engineer. I love writing code to build solutions to
              real world problems. Over the last 4 years, I have worked in 4
              companies (one of them being my own &#128521;), participated in 3
              hackathons (and won one of them &#128522;) and built numerous side
              projects!
            </p>

            <p>
              Primarily a full stack Javascript developer, I am skilled in the
              MERN stack. I have experience in building web/mobile apps using
              Node.js, Express, MongoDB/MySQL, React & React Native. Besides
              that, I am a skilled Cloud and DevOps engineer. I have worked with
              cloud technologies like Amazon Web Services, Digital Ocean and
              Firebase to build and deploy applications securely in a scalable
              manner.
            </p>
            <p>
              I also have some experience in Java and Python. I have worked on
              native android apps using Java and Android Studio and written
              automation/scraping scripts using Python.
            </p>
            <p>
              In short, I am a jack of all trades (and master of a few!😉) .
            </p>
          </div>
        </Col>
      </Row>
      <Row className={styles.aboutContainer}>
        <Col sm={6} className={styles.aboutTextContainer}>
          <p>
            {" "}
            Apart from building websites and apps, I also have an interest in
            Machine Learning, Blockchain and Cybersecurity and I'm expanding my
            knowledge in these areas. 🚀
          </p>

          <p>
            I make efforts to remain relevant to the fast changing and evolving
            industry by constantly upksilling. I am also a strong beliver and
            supporter of open source/student tech communities. I was formerly
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
              href="https://gdg.community.dev/gdg-kolkata/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDG Kolkata.
            </a>{" "}
          </p>
        </Col>

        <Col sm={6}>
          <p>
            {" "}
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: developerLottie,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={400}
              height={400}
            />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
