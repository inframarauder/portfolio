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
  }, []);
  return (
    <div id="skills">
      <legend className="greet">Skills</legend>
      <Container>
        <p className="text-center">These technologies are my top skills</p>
        <ul className="skill-list">
          {skills.map((skill, i) => (
            <li key={i}>
              <img src={skill.logo} alt={skill.name} className="skill" />
            </li>
          ))}
        </ul>
        <p className="text-center">
          Apart from these, I have good knowledge of Programming in
          Python,Java,C,C++,Data Structures & Algorithms,SQL databases and
          System Design.
        </p>
        <h4 className="text-center">
          <a
            href="https://drive.google.com/file/d/1J2VaVc2_scYVVrqee_55Vs_jab_H8GIT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Resume
          </a>
        </h4>
      </Container>
    </div>
  );
};

export default Skills;
