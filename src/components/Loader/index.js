import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class Loader extends Component {
  render() {
    return (
      <div className="loading">
        <Spinner color="primary" />
        <p className="text-primary">Loading
          <span id="dot_1"> . </span>
          <span id="dot_2"> . </span>
          <span id="dot_3"> . </span>
        </p>
      </div>
    );
  }
}

export default Loader;
