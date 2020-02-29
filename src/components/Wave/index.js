import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { dotsList } from '../../consts';

const Wave = ({ className }) => (
  <span id="wave">
    {dotsList.map(({ id, baseClassName }) => (
      <span key={id} className={cn(baseClassName, className)} />
    ))}
  </span>
);

Wave.propTypes = {
  className: PropTypes.string
};

Wave.defaultProps = {
  className: 'bg-primary'
};

export default Wave;
