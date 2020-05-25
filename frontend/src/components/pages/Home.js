import React from 'react';
import Sidebar from '../layout/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/creators">CREATORS</Link>
    </div>
  );
};

export default Home;
