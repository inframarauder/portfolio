import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import projects from "../data/projects";

const Home = () => {
	return (
		<div className="container min-h-screen bg-primary">
			<div id="about">
				<About />
			</div>
			<div id="projects">
				<Projects projects={projects} />
			</div>
		</div>
	);
};

export async function getStaticProps(ctx) {
	return {
		props: {
			projects,
		},
	};
}

export default Home;
