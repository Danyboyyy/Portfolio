import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  ContactContainer,
  ContactWrapper,
  Heading,
  ContactLink
} from './ContactElements';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Heading>Contact Me</Heading>
      <ContactWrapper>
        <ContactLink href="https://www.github.com/Danyboyyy" target="_blank">
          <FaGithub />
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/daniel-alejandro-david-s%C3%A1nchez-72a807191/?locale=en_US" target="_blank">
          <FaLinkedin />
        </ContactLink>
        <ContactLink href="mailto:danielalejandrods.2000@gmail.com">
          <FaEnvelope />
        </ContactLink>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;