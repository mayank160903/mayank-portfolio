import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import './contact.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_46np80u', 'template_fyt3lnh', form.current, {
        publicKey: 'sEhNkYb6ANnHGWvBL',
      })
      .then(
        () => {
          alert('YOUR MESSAGE HAS BEEN SENT TO MAYANK SUCCESSFULLY!');
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong. Please Try Again!" + error);
        },
      );
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label className="contact-title">Email Me 🚀</label>
            <hr/>
            <label className="contact-title">Name</label>
            <input className="contact-input" type="text" name="user_name" />
            <label className="contact-title" >Email</label>
            <input className="contact-input" type="text" name="user_email" />
            <label className="contact-title">Subject</label>
            <input className="contact-input" type="text" name="subject" />
            <label className="contact-title" >Message</label>
            <textarea className="contact-input-message" name="message" />
            <input className="contact-button" type="submit" value="Send" />
        </form>
      </Wrapper>
    </Container>
  );
};

export default Contact;