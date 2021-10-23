import React from "react";
import { Layout, About, Landing, Projects, Skills } from "../components";

const Home = () => {
	return (
		<Layout>
			<div id="home">
				<Landing />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="skills">
				<Skills />
			</div>
			<div id="projects">
				<Projects />
			</div>
		</Layout>
	);
};

export default Home;
