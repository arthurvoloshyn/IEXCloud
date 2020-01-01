import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem, PaginationLink } from 'reactstrap';

const PaginationElement = ({ page, activePage, changePage }) => (
  <PaginationItem id={`item_${page}`} className={page === activePage ? 'active' : ''}>
    <PaginationLink id={page} onClick={() => changePage(page)}>
      {page}
    </PaginationLink>
  </PaginationItem>
);

PaginationElement.propTypes = {
  changePage: PropTypes.func,
  page: PropTypes.number,
  activePage: PropTypes.number
};

PaginationElement.defaultProps = {
  changePage: () => {},
  page: 1,
  activePage: 1
};

export default PaginationElement;
