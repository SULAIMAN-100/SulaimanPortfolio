import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
