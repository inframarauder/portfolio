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
            <Col sm="2" key={skills.indexOf(skill)}>
              <img src={skill.logo} alt={skill.name} className="skill" />
            </Col>
          ))}
        </Row>
        <p className="text-center">
          Apart from these, I have good knowledge of Programming in
          Java,C,C++,Python,Data Structures & Algorithms,SQL databases and
          System Design.
        </p>
      </Container>
    </div>
  );
};

export default Skills;
