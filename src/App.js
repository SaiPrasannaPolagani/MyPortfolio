import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={Projects} path="/projects" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
