import React, { useState } from "react";
import { useTheme } from "./ThemeContent"; // Ensure correct file name
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 20px;
`;

const Form = styled.form`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s ease;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.background}; /* Ensure visibility */
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  background: ${({ theme }) => theme.color}; /* Fix background */
  color: ${({ theme }) => theme.background}; /* Fix text color */
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.background}; /* Ensure visibility */
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  resize: none;
  height: 100px;
  background: ${({ theme }) => theme.color}; /* Fix background */
  color: ${({ theme }) => theme.background}; /* Fix text color */
`;

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container theme={theme}>
      <h1>Contact Us</h1>
      <Form theme={theme} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <Button theme={theme} type="submit">Send Message</Button>
      </Form>
      <Link to="/">Go to Home</Link>
    </Container>
  );
};

export default Contact;
