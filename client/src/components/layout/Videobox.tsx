import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  views: number;
  timestamp: Date;
  videoId: number;
}

const Videobox: React.FC<Props> = ({ title, views, timestamp, videoId }) => {
  return (
    <div className="video-box">
      <Link to={`/video/${videoId}`}>{title}</Link>
      <p>{views}</p>
      <p>{moment(Number(timestamp)).fromNow()}</p>
    </div>
  );
};

export default Videobox;
