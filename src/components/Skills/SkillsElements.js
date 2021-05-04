import styled from 'styled-components';

export const SkillsContainer = styled.div`
  color: #fff;
  background: #0c0c0c;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const SkillsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
`

export const Heading = styled.h1`
  margin-bottom: 100px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: '#f7f8fa';

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`