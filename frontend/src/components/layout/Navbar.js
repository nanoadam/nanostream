import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import layoutContext from '../../context/layout/layoutContext';

const Navbar = () => {
  const LayoutContext = useContext(layoutContext);
  return (
    <nav className="bg-primary z-depth-0">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo left small">
          NanoStream
        </Link>
        <div className="input-field right" style={{ width: '50%' }}>
          <input id="search" type="search" placeholder="Search" />
          <label className="label-icon">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
