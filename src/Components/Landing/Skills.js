import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/db/skills.json");
        setSkills(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [skills, setSkills]);
  return (
    <div id="skills">
      <legend className="greet">Skills</legend>
      <Container>
        <p className="text-center">These technologies are my top skills :</p>
        <ul>
          {skills.map((skill) => (
            <li>
              <img src={skill.logo} alt={skill.name} className="skill" />
            </li>
          ))}
        </ul>
        <p className="text-center">
          Apart from these, I have good knowledge of Programming in
          Java,C,C++,Data Structures & Algorithms,SQL databases and System
          Design.
        </p>
      </Container>
    </div>
  );
};

export default Skills;
