import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../components/pages/Home";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
