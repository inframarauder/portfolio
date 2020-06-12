import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("This feature is not yet complete,please comeback later!");
  };

  return (
    <div id="contactForm">
      <legend className="greet">Contact Me</legend>
      <Container id="formContainer">
        <Form className="text-center" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="text-left">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="abc@xyz.com"
              value={formData.email}
              onChange={(e) => handleChange(e)}
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
