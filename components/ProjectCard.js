import React from "react";
import { External } from "./Icons";

const ProjectCard = ({ project }) => {
	return (
		<div className="bg-primary shadow-xl  m-4">
			<img
				src={project.logo}
				alt={project.title}
				className="w-full h-64 object-fill"
			/>
			<div className="p-4">
				<h3 className="text-2xl font-bold">{project.title}</h3>
				<p className="text-md py-2">{project.description}</p>
				<div className="flex flex-wrap">
					{project.tech.map((tech, index) => (
						<div className="p-2">
							<span
								key={index}
								className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
							>
								{tech}
							</span>
						</div>
					))}
				</div>
				<div className="flex justify-end items-center my-2">
					<a
						href={project.projectLink}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center">
							<span className="mx-2">View Project</span> <External />
						</button>
					</a>
					<a
						href={project.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center">
							<span className="mx-2">View Code</span> <External />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
