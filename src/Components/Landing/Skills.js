import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

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
        <p className="text-center">These technologies are my top skills :</p>
        <Row>
          {skills.map((skill) => (
            <Col sm="3" key={skills.indexOf(skill)}>
              <img src={skill.logo} alt={skill.name} className="skill" />
            </Col>
          ))}
        </Row>
        <p className="text-center">
          Apart from these, I have good knowledge of Programming in
          Python,Java,C,C++,Data Structures & Algorithms,SQL databases and
          System Design.
        </p>
        <h4 className="text-center">
          <a
            href="https://docs.google.com/document/d/16APS-VMwvYVCDoRLN1xC-npeaSk_2sJoJJB94Pg13UE/edit?usp=sharing"
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
