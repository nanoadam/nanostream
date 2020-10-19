import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  return (
    <div className="container layout">
      <div className="card">
        <h3 className="text-center">Login</h3>
        <div className="form-group">
          <label htmlFor="Email">Email Address</label>
          <input type="text" placeholder="Email Address" />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
