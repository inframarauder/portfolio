import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Spinner } from "../Layouts";
import axios from "axios";

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
      await axios.post(
        "https://rhn6n9xr3k.execute-api.ap-south-1.amazonaws.com/dev/handle_form",
        formData
      );
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
      alert("An error occured,please try again!");
    }
  };

  return (
    <div id="contactForm">
      <legend className="greet">Contact Me</legend>
      <Container id="formContainer">
        {loading ? (
          <Spinner />
        ) : submitted ? (
          <p className="text-center">
            Thank you for contacting me! I will get back to you soon :)
          </p>
        ) : (
          <Form className="text-center" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="text-left">
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
            <Form.Group className="text-left">
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
            <Form.Group className="text-left">
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
            <Form.Group className="text-left">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows="5"
                placeholder="Leave a message for me,I will get back to you at the earliest!"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default Contact;
