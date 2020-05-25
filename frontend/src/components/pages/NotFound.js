import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  setTimeout(() => {
    return history.push('/');
  }, 2000);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>You will be re-directed shortly</p>
    </div>
  );
};

export default NotFound;
