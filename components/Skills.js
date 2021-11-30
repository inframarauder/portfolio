import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Skills = ({ skills }) => {
	return (
		<div className={`${styles.skillsContainer}`}>
			<h2 className="text-center my-4">
				<u>SKILLS</u>
			</h2>
			<p style={{ fontSize: "1.2rem", textAlign: "center" }}>
				Here's everything that I can do :
			</p>
			<Row>
				{skills.map((item, index) => (
					<Col sm={12} md={6} lg={4} key={index}>
						<Card className={styles.skillCard}>
							<Card.Img
								variant="top"
								src={item.avatar}
								className={styles.skillCardImg}
							/>
							<Card.Body>
								<Card.Title>
									<h4 style={{ color: "#ffcb37" }}>{item.name}</h4>
								</Card.Title>
								<Card.Text>{item.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Skills;
