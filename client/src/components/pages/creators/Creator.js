import React from "react";
import PropTypes from "prop-types";

const Creator = (props) => {
  return (
    <div className="container layout">
      <h1>{props.match.params.id}</h1>
    </div>
  );
};

Creator.propTypes = {};

export default Creator;
