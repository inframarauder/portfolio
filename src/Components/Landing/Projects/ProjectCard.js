import React, { Fragment, useState } from "react";
import { Card } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  const [opacity, setOpacity] = useState({
    project_card: "opacity-08",
    middle: "opacity-0",
  });
  const toggleOpacity = () => {
    setOpacity((opacity) => {
      let project_card =
        opacity.project_card === "opacity-08" ? "opacity-02" : "opacity-08";
      let middle = opacity.middle === "opacity-0" ? "opacity-1" : "opacity-0";

      return { ...opacity, project_card, middle };
    });
  };
  return (
    <Fragment>
      <Card
        className={`project-card ${opacity.project_card}`}
        onMouseEnter={toggleOpacity}
        onMouseLeave={toggleOpacity}
      >
        <Card.Img
          variant="top"
          src={project.image}
          style={{ height: "12rem" }}
        />
        <Card.Body>
          <Card.Title>
            {project.name}
            <br />
            <small>{project.role}</small>
          </Card.Title>
          <Card.Text style={{ padding: "5", fontSize: "20" }}>
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>
      <div
        className={`middle ${opacity.middle}`}
        onMouseEnter={toggleOpacity}
        onMouseLeave={toggleOpacity}
      >
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-share" aria-hidden="true"></i>
        </a>
      </div>
    </Fragment>
  );
};

export default ProjectCard;
