import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
	return (
		<div className="bg-shaded text-secondary min-h-screen">
			<legend className="text-center text-4xl py-4">Projects</legend>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
