import React from 'react';
import { Spinner } from 'reactstrap';

import Wave from '../Wave';

const Loader = () => (
  <div className="center">
    <Spinner color="primary" />
    <p className="text-primary">
      Loading
      <Wave className="bg-primary" />
    </p>
  </div>
);

export default Loader;
