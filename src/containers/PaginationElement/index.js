import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem, PaginationLink } from 'reactstrap';

const PaginationElement = ({ number, activePage, changePage }) => (
  <PaginationItem id={`item_${number}`} className={number === activePage ? 'active' : ''}>
    <PaginationLink id={number} onClick={() => changePage(number)}>
      {number}
    </PaginationLink>
  </PaginationItem>
);

PaginationElement.propTypes = {
  changePage: PropTypes.func,
  number: PropTypes.number,
  activePage: PropTypes.number
};

PaginationElement.defaultProps = {
  changePage: () => {},
  number: 1,
  activePage: 1
};

export default PaginationElement;
