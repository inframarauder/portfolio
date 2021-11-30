import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import landingLottie from "../lotties/landing-lottie.json";

const Landing = () => {
	return (
		<Container fluid className={styles.landing}>
			<Row>
				<Col className={styles.lottieContainer}>
					<Lottie
						options={{
							loop: true,
							autoplay: true,
							animationData: landingLottie,
							rendererSettings: {
								preserveAspectRatio: "xMidYMid slice",
							},
						}}
						width={400}
						height={400}
					/>
				</Col>
				<Col>
					<div className="text-center my-2">
						<h2>Hi, I'm Subhasis &#x1F604; </h2>
						<span className={styles.landingSubtext}>
							Cloud & DevOps Engineer☁️ | Fullstack Web Developer🌐
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
				</Col>
			</Row>
		</Container>
	);
};

export default Landing;
