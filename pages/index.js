import React from "react";
import { Layout, About, Landing, Projects } from "../components";

const Home = () => {
	return (
		<Layout>
			<div id="home">
				<Landing />
			</div>
			<div id="about">
				<About id="about" />
			</div>
			<div id="projects">
				<Projects id="projects" />
			</div>
		</Layout>
	);
};

export default Home;
