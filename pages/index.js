import React from "react";
import { Layout, About, Skills, Projects } from "../components";

const Home = () => {
  return (
    <Layout>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </Layout>
  );
};

export default Home;
