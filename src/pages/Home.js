import React, { useState } from 'react'
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
