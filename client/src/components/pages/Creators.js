import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCreators } from "../../actions/creators";
import PropTypes from "prop-types";

const Creators = ({ getCreators }) => {
  useEffect(() => {
    getCreators();
  }, []);
  return (
    <div className="layout container">
      <h1>Creators</h1>
    </div>
  );
};

Creators.propTypes = {};

export default connect(null, { getCreators })(Creators);
