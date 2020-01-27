import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PaginationElement from '../PaginationElement';

const MyPagination = ({ pages, activePage, changePage }) => {
  const isFirstPage = activePage === 1 && true;
  const isLastPage = activePage === pages[pages.length - 1] && true;

  return (
    <Pagination>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink onClick={() => changePage(pages[0])} first />
      </PaginationItem>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink onClick={() => changePage(activePage - 1)} previous />
      </PaginationItem>
      {pages.map(page => (
        <PaginationElement key={page} page={page} activePage={activePage} changePage={() => changePage(page)} />
      ))}
      <PaginationItem disabled={isLastPage}>
        <PaginationLink onClick={() => changePage(activePage + 1)} next />
      </PaginationItem>
      <PaginationItem disabled={isLastPage}>
        <PaginationLink onClick={() => changePage(pages[pages.length - 1])} last />
      </PaginationItem>
    </Pagination>
  );
};

MyPagination.propTypes = {
  changePage: PropTypes.func,
  pages: PropTypes.array,
  activePage: PropTypes.number
};

MyPagination.defaultProps = {
  changePage: () => {},
  pages: [],
  activePage: 1
};

export default MyPagination;
