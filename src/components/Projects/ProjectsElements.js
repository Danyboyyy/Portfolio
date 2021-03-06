import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 365px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ProjectsH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`

export const ProjectsP = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`

export const ProjectsSub = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  font-style: italic;
`

export const ProjectLink = styled.a`
  color: #0c0c0c;
  margin-right: 5px;
  text-decoration: none;
`

export const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start
`