import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./Components/Layouts";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
