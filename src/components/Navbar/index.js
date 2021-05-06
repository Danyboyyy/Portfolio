import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  LinkPdf
} from './NavbarElements';
import { animateScroll } from 'react-scroll';
import pdf from '../../data/Resume.pdf';

const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    animateScroll.scrollToTop(); 
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/Portfolio/Home">Daniel David</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' >About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' >Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' >Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <LinkPdf href={pdf} target="_blank">Resume</LinkPdf>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
