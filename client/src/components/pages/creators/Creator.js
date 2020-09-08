import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { getCreator } from '../../../actions/creators';

const Creator = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const creator = useSelector((state) => state.creators.creator);
  useEffect(() => {
    dispatch(getCreator(params.id));
  }, []);
  return (
    <div className="container layout">
      {creator ? (
        <React.Fragment>
          <h1>{creator.name}</h1>
          <small>{creator.description}</small>
          <p>
            <FaGlobe className="icon icon-small" />{' '}
            <span className="icon-text">{creator.website}</span>
          </p>
        </React.Fragment>
      ) : (
        'Loading'
      )}
    </div>
  );
};

Creator.propTypes = {};

export default Creator;
