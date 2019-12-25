import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Wave = ({ className }) => (
  <span id="wave">
    <span className={cn('dot', className)} />
    <span className={cn('dot', className)} />
    <span className={cn('dot', className)} />
  </span>
);

Wave.propTypes = {
  className: PropTypes.string
};

Wave.defaultProps = {
  className: 'bg-primary'
};

export default Wave;
