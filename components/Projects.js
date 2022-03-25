import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
	return (
		<div className="bg-shaded text-secondary min-h-screen">
			<div className="mx-auto w-full py-6 bg-shaded flex flex-col items-center">
				<h1 className="text-center text-4xl py-8 mt-10 text-highlight">
					Projects
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
