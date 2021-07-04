import React from "react";
import { Layout, About, Landing, Projects } from "../components";

const Home = () => {
  return (
    <Layout>
      <Landing id="home" />
      <About id="about" />
      <Projects id="projects" />
    </Layout>
  );
};

export default Home;
