import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import LayoutState from '../context/layout/LayoutState';
import Creators from '../components/pages/Creators';

const RoutingObject = () => {
  return (
    <Router>
      <LayoutState>
        <div>
          <Navbar />
          <div className="wrapper">
            {/* <Sidebar /> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/creators" exact component={Creators} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </LayoutState>
    </Router>
  );
};

export default RoutingObject;
