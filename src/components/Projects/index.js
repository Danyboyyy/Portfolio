import React from 'react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectsH2,
  ProjectsCard,
  ProjectsP,
  ProjectsSub,
  ProjectLink,
  LinkArea
} from './ProjectsElements';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsH2>Issue Tracker</ProjectsH2>
          <ProjectsP>Allows a user to sign in and add and organize their tasks to do.</ProjectsP>
          <ProjectsSub>Typescript, GrpahQL, PostgreSQL, TypeORM, React</ProjectsSub>
          <LinkArea>
            <ProjectLink href="https://github.com/Danyboyyy/Issue-Tracker">
              <FaGithub />
            </ProjectLink>
          </LinkArea>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsH2>Sudoku Solver</ProjectsH2>
          <ProjectsP>Auto-solvable sudoku board using a backtracking algorithm. The user can design their own sudoku board and it will solve it if possible.</ProjectsP>
          <ProjectsSub>Javascript, Redux, React</ProjectsSub>
          <LinkArea>
            <ProjectLink href="https://github.com/Danyboyyy/Issue-Tracker">
              <FaGithub />
            </ProjectLink>
          </LinkArea>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsH2>Spotifavs</ProjectsH2>
          <ProjectsP>Web app that connects to the Spotify API fetching the user´s favorite songs and artists.</ProjectsP>
          <ProjectsSub>Javascript, OAuth, React</ProjectsSub>
          <LinkArea>
            <ProjectLink href="https://github.com/Danyboyyy/Issue-Tracker">
              <FaGithub />
            </ProjectLink>
            <ProjectLink href="">
              <FaLink />
            </ProjectLink>
          </LinkArea>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsH2>Danurls</ProjectsH2>
          <ProjectsP>URL shortener app where the user can shorten any valid url with a random or personalized slug.</ProjectsP>
          <ProjectsSub>Javascript, Node JS, MongoDB, Express, React</ProjectsSub>
          <LinkArea>
            <ProjectLink href="https://github.com/Danyboyyy/Issue-Tracker">
              <FaGithub />
            </ProjectLink>
          </LinkArea>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
