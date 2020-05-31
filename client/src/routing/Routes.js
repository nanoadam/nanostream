import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

// Import Routes
import Home from "../components/pages/Home";
import Creators from "../components/pages/Creators";
import NotFound from "../components/pages/NotFound";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/creators" exact component={Creators} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
