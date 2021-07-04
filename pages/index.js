import React from "react";
import { Layout, About, Skills, Projects } from "../components";

const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;
