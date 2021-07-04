import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className="my-4">
      <div className={styles.aboutContainer}>
        <h2 className="text-center my-4">
          <u>ABOUT ME</u>
        </h2>
        <img src="/images/me.jpg" alt="me" className={styles.image} />

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
          as a Systems Engineer. I love writing code to build solutions to real
          world problems. Over the last 4 years, I have worked in 4 companies
          (one of them being my own &#128521;), participated in 3 hackathons
          (and won one of them &#128522;) and built numerous side projects!
        </p>

        <p style={{ fontSize: "1.2rem" }}>
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
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
