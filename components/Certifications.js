import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import certificationsData from "../data/certifications";

const Certifications = () => {
	return (
		<div className={`${styles.certificationsContainer}`}>
			<h2 className="text-center my-4">
				<u>CERTIFICATIONS</u>
			</h2>
			<p style={{ fontSize: "1.2rem", textAlign: "center" }}>
				Here's a list of my official certifications :
			</p>
			<Row>
				{certificationsData.map((item, index) => (
					<Col sm={12} md={6} lg={4} key={index}>
						<Card className={styles.certificationCard}>
							<Card.Img
								variant="top"
								src={item.image}
								className={styles.certificationCardImg}
							/>
							<Card.Body>
								<Card.Title>
									<h4>{item.name}</h4>
									<small style={{ color: "#ffcb37" }}>{item.issuedBy}</small>
								</Card.Title>
								<Card.Text>{item.description}</Card.Text>
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{ fontSize: 20 }}
								>
									View Certificate{" "}
									<i
										className="fa fa-external-link-square"
										aria-hidden="true"
									></i>
								</a>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Certifications;
