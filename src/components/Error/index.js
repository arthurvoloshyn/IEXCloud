import React from 'react';

import Wave from '../Wave';

const Error = () => (
  <div className="center">
    <p className="text-danger">
      Error, please clear cache and try again
      <Wave className="bg-danger" />
    </p>
    <button type="button" className="btn btn-outline-danger btn-block" onClick={() => window.location.reload()}>
      Reload
    </button>
  </div>
);

export default Error;
