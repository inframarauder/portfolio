import React from "react";
import {
	Layout,
	About,
	Landing,
	Projects,
	Skills,
	Certifications,
} from "../components";
import { projects, skills, certifications } from "../data";

const Home = ({ projects, skills, certifications }) => {
	return (
		<Layout>
			<div id="home">
				<Landing />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="skills">
				<Skills skills={skills} />
			</div>
			<div id="projects">
				<Projects projects={projects} />
			</div>
			<div id="certifications">
				<Certifications certifications={certifications} />
			</div>
		</Layout>
	);
};

export function getStaticProps(context) {
	return {
		props: {
			projects,
			skills,
			certifications,
		},
	};
}

export default Home;
