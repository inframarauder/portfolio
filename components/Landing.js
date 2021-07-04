import React from "react";
import Lottie from "react-lottie";
import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import landingLottie from "../lotties/landing-lottie.json";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: landingLottie,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={300}
        height={300}
      />
      <div className="text-center my-2">
        <h2>Hi, I'm Subhasis &#x1F604; </h2>
        <span className={styles.landingSubtext}>
          Web Developer🌐|App Developer📱|Cloud Engineer☁️
        </span>
        <p>
          <Button
            className={styles.contactMeButton}
            onClick={() => (window.location.href = "/contact")}
          >
            <h4>Get In Touch ➡️</h4>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Landing;
