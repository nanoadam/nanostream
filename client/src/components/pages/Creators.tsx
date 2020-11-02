import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getCreators } from '../../actions/creators';
import PropTypes from 'prop-types';

interface Creator {
  name: String;
  description: String;
  _id: number;
}

const Creators: React.FC = ({}) => {
  const dispatch = useDispatch();

  const creators = useSelector(
    (state: RootStateOrAny) => state.creators.creators
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.creators.loading
  );

  useEffect(() => {
    dispatch(getCreators());
    // eslint-disable-next-line
  }, []);
  const displayCreators =
    creators !== null && creators.length > 1 ? (
      creators.map((creator: Creator) => (
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

export default Creators;
