import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/db/projects.json");
        setProjects(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div id="projects">
      <legend className="greet">Projects</legend>
      <Container>
        <Row>
          {projects.map((project) => (
            <Col sm="6" key={projects.indexOf(project)}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;