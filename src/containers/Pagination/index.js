import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PaginationElement from '../PaginationElement';

const MyPagination = ({ pages, activePage, currentPage }) => {
  const isFirstPage = activePage === 1 && true;
  const isLastPage = activePage === pages[pages.length - 1] && true;

  return (
    <div>
      {pages.length && (
        <Pagination>
          <PaginationItem disabled={isFirstPage}>
            <PaginationLink onClick={() => currentPage(pages[0])} first />
          </PaginationItem>
          <PaginationItem disabled={isFirstPage}>
            <PaginationLink onClick={() => currentPage(activePage - 1)} previous />
          </PaginationItem>
          {pages.map(number => (
            <PaginationElement key={number} number={number} activePage={activePage} changePage={() => currentPage(number)} />
          ))}
          <PaginationItem disabled={isLastPage}>
            <PaginationLink onClick={() => currentPage(activePage + 1)} next />
          </PaginationItem>
          <PaginationItem disabled={isLastPage}>
            <PaginationLink onClick={() => currentPage(pages[pages.length - 1])} last />
          </PaginationItem>
        </Pagination>
      )}
    </div>
  );
};

MyPagination.propTypes = {
  currentPage: PropTypes.func,
  pages: PropTypes.array,
  activePage: PropTypes.number
};

MyPagination.defaultProps = {
  currentPage: () => {},
  pages: [],
  activePage: 1
};

export default MyPagination;
