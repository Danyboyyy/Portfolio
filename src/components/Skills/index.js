import React from 'react';
import {
  SkillsContainer,
  SkillsWrapper,
  Heading
} from './SkillsElements';
import { TagCloud } from 'react-tagcloud';

const Skills = () => {

  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'Typescript', count: 38 },
    { value: 'React', count: 38 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express', count: 25 },
    { value: 'HTML', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS', count: 20 },
    { value: 'PostgreSQL', count: 25 },
    { value: 'mySQL', count: 20 },
    { value: 'GraphQL', count: 20 },
    { value: 'C++', count: 38 },
    { value: 'Git', count: 30 },
    { value: 'Python', count: 30 },
    { value: 'Haskell', count: 20 },
    { value: 'Racket', count: 20 }
  ];

  const options = {
    luminosity: 'light',
    hue: 'green',
  };
  
  return (
    <SkillsContainer id="skills">
      <Heading>Skills</Heading>
      <SkillsWrapper>
        <TagCloud
          minSize={25}
          maxSize={55}
          colorOptions={options}
          tags={data}
        />
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;