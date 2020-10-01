import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCreators } from '../../actions/creators';
import PropTypes from 'prop-types';

const Creators = ({ getCreators, creators, loading }) => {
  useEffect(() => {
    getCreators();
    // eslint-disable-next-line
  }, []);
  const displayCreators =
    creators !== null && creators.length > 1 ? (
      creators.map((creator) => (
        <div key={creator._id}>
          <div className="card card-flex card-full-width card-primary">
            <div className="card-img"></div>
            <div className="card-body">
              <h3>{creator.name}</h3>
              <p>{creator.description}</p>
            </div>
            <div className="card-side">
              <Link
                to={`/creator/${creator._id}`}
                className="btn btn-secondary"
              >
                View Creator{' '}
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <h2>No Creators not found</h2>
    );
  return (
    <div className="layout container">
      <h1>Creators</h1>
      {loading ? <h1>Page Loading</h1> : displayCreators}
    </div>
  );
};

Creators.propTypes = {};

const mapStateToProps = (state) => ({
  creators: state.creators.creators,
  loading: state.creators.loading,
});

export default connect(mapStateToProps, { getCreators })(Creators);
