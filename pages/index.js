import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import projects from "../data/projects";
import certifications from "../data/certifications";

const Index = () => {
	return (
		<div className="container min-h-screen bg-primary">
			<div id="home">
				<Home />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="projects">
				<Projects projects={projects} />
			</div>
			<div id="certifications">
				<Certifications certifications={certifications} />
			</div>
		</div>
	);
};

export async function getStaticProps(ctx) {
	return {
		props: {
			projects,
			certifications,
		},
	};
}

export default Index;
