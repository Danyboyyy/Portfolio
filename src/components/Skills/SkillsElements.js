import styled from 'styled-components';

export const SkillsContainer = styled.div`
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

export const SkillsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`

export const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`