import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// Import Routes
import Home from '../components/pages/Home';
import Creators from '../components/pages/Creators';
import NotFound from '../components/pages/NotFound';
import Creator from '../components/pages/creators/Creator';
import Login from '../components/pages/auth/Login';
import Register from '../components/pages/auth/Register';
import Video from '../components/pages/Video';

const Routes: React.FC = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/creators" exact component={Creators} />
      <Route path="/creator/:id" exact component={Creator} />

      {/* Auth */}
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      {/* Video */}
      <Route path="/video/:id" exact component={Video} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
