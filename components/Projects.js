import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Projects = ({ projects }) => {
	return (
		<div className={`${styles.projectContainer}`}>
			<h2 className="text-center my-4">
				<u>PROJECTS</u>
			</h2>
			<p style={{ fontSize: "1.2rem", textAlign: "center" }}>
				Below are some of the projects spanning across various tech stacks that
				I have worked on....
			</p>
			<Row>
				{projects.map((item, index) => (
					<Col sm={12} md={6} lg={4} key={index}>
						<Card className={styles.projectCard}>
							<Card.Img
								variant="top"
								src={item.logo}
								className={styles.projectCardImg}
							/>
							<Card.Body>
								<Card.Title>
									<h4>{item.title}</h4>
								</Card.Title>
								<Card.Text>{item.description}</Card.Text>
								<Card.Text>
									<strong>Tech Used</strong>
									<br />
									{item.tech.map((ele, i) => (
										<Badge pill className={styles.techBadge} key={i}>
											{ele}
										</Badge>
									))}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<span className={styles.projectLinks}>
									{item.githubLink && (
										<a
											href={item.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											style={{ margin: 20, fontSize: 20 }}
										>
											<i className="fa fa-github" aria-hidden="true"></i>
										</a>
									)}
									{item.projectLink && (
										<a
											href={item.projectLink}
											target="_blank"
											rel="noopener noreferrer"
											style={{ fontSize: 20 }}
										>
											<i
												className="fa fa-external-link-square"
												aria-hidden="true"
											></i>
										</a>
									)}
								</span>
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Projects;
