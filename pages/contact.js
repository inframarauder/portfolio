import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../components";
import styles from "../styles/Contact.module.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			await axios.post("/api/email", formData);
			setLoading(false);
			setSubmitted(true);
		} catch (error) {
			setLoading(false);
			console.error(error.message);
			alert("An error occured,please try again!");
		}
	};

	return (
		<Layout>
			<div className={styles.contactForm}>
				<h2 className="text-center my-4">
					<u>Contact Me</u>
				</h2>
				<Container className={styles.formContainer}>
					{loading ? (
						<div className={styles.spinnerContainer}>
							<Spinner animation="border" variant="warning" />
						</div>
					) : submitted ? (
						<p className="text-center">
							Thank you for contacting me! I will get back to you soon :)
						</p>
					) : (
						<Form onSubmit={(e) => handleSubmit(e)}>
							<Form.Group className="my-2">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									placeholder="John Doe"
									value={formData.name}
									onChange={(e) => handleChange(e)}
									required
								/>
							</Form.Group>
							<Form.Group className="my-2">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="abc@xyz.com"
									value={formData.email}
									onChange={(e) => handleChange(e)}
									required
								/>
							</Form.Group>
							<Form.Group className="my-2">
								<Form.Label>Subject</Form.Label>
								<Form.Control
									type="text"
									name="subject"
									placeholder="Enter subject"
									value={formData.subject}
									onChange={(e) => handleChange(e)}
									required
								/>
							</Form.Group>
							<Form.Group className="my-2">
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea"
									name="message"
									rows="7"
									placeholder="Leave a message for me,I will get back to you at the earliest!"
									value={formData.message}
									onChange={(e) => handleChange(e)}
									required
								/>
							</Form.Group>
							<Button
								variant="primary"
								size="lg"
								type="submit"
								className={styles.submitBtn}
							>
								Send
							</Button>
						</Form>
					)}
				</Container>
			</div>
		</Layout>
	);
};

export default Contact;
