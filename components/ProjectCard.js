import React from "react";
import { External } from "./Icons";

const ProjectCard = ({ project }) => {
	return (
		<div className="bg-primary border-2 border-highlight rounded-xl  m-4 p-2">
			<img
				src={project.logo}
				alt={project.title}
				className="w-full h-64 object-fill"
			/>
			<div className="p-4">
				<h3 className="text-2xl font-bold text-highlight">{project.title}</h3>
				<p className="text-md py-2">{project.description}</p>
				<div className="flex justify-end items-center my-2">
					{project.projectLink && (
						<a
							href={project.projectLink}
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2"
						>
							<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center hover:text-lg transition duration-200 ease-out">
								<span className="mx-2">View Project</span> <External />
							</button>
						</a>
					)}
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="mx-2"
						>
							<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center hover:text-lg transition duration-200 ease-out">
								<span className="mx-2">View Code</span> <External />
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
