import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

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
							I'm a fullstack developer and a devops engineer. I have a
							Bachelor's Degree in Computer Science & Engineering from{" "}
							<a
								href="https://www.heritageit.edu"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								Heritage Institute of Technology, Kolkata.
							</a>{" "}
							I'm currently working at{" "}
							<a
								href="https://www.tcs.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								Tata Consultancy Services
							</a>{" "}
							as a Systems Engineer.
						</p>
						<p>
							{" "}
							I love writing code to build solutions to real world problems.
							Over the last 4 years, I have worked in 4 companies (one of them
							being my own &#128521;), participated in 3 hackathons (and won one
							of them &#128522;) and built numerous side projects!
						</p>

						<p>
							My areas of expertise include: Cloud Computing, DevOps and
							Fullstack Web Development using the MERN Stack. I am also a
							HashiCorp Certified Terraform Associate. Some of my core
							competencies include: Javascript, Node.js, React, MongoDB, Amazon
							Web Services, Terraform and Docker.
						</p>
						<p>
							I make efforts to remain relevant to the fast changing and
							evolving industry by constantly upksilling. I am also a strong
							beliver and supporter of open source/student tech communities. I
							was formerly associated with{" "}
							<a
								href="https://dschit.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								DSC,HIT
							</a>{" "}
							and{" "}
							<a
								href="https://gdg.community.dev/gdg-kolkata/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								GDG Kolkata.
							</a>{" "}
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
