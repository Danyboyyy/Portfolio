import React from 'react';
import { SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarBtn
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About Me
          </SidebarLink>
          <SidebarLink to="skills">
            Skills
          </SidebarLink>
          <SidebarLink to="projects">
            Projects
          </SidebarLink>
          <SidebarLink to="contact">
            Contact Me
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn to="/download">Resume</SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
