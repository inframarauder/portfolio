import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  return (
    <div id="contactForm">
      <legend className="greet">Contact Me</legend>
      <Container id="formContainer">
        <Form className="text-center">
          <Form.Group className="text-left">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="abc@xyz.com" />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Leave a message for me,I will get back to you at the earliest!"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
