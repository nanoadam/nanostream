import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import moment from 'moment';

import { RootStateOrAny } from 'react-redux';
import { getCreator } from '../../../actions/creators';
import Videobox from '../../layout/Videobox';

interface Params {
  id: any;
}

interface Video {
  title: string;
  timestamp: Date;
  videoId: number;
  views: number;
}

const Creator = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  const creator = useSelector(
    (state: RootStateOrAny) => state.creators.creator
  );
  useEffect(() => {
    dispatch(getCreator(id));
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
          <h3 style={{ background: '#333', color: 'white' }}>Creator Videos</h3>
          <div className="grid grid-3">
            {creator.videos.map((vid: Video) => (
              <Videobox {...vid} key={vid.videoId} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default Creator;
