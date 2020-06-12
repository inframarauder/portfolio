import React, { Fragment } from "react";
import { Header, Footer } from "./Components/Layouts";
import Landing from "./Components/Landing";

function App() {
  return (
    <Fragment>
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
}

export default App;
