import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PaginationElement from '../PaginationElement';

const MyPagination = ({ pages, activePage, changePage }) => {
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pages[pages.length - 1];

  const goToFirstPage = () => changePage(pages[0]);
  const goToPreviousPage = () => changePage(activePage - 1);
  const goToNextPage = () => changePage(activePage + 1);
  const goToLastPage = () => changePage(pages[pages.length - 1]);

  return (
    <Pagination>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink onClick={goToFirstPage} first />
      </PaginationItem>
      <PaginationItem disabled={isFirstPage}>
        <PaginationLink onClick={goToPreviousPage} previous />
      </PaginationItem>
      {pages.map(page => {
        const goToPage = () => changePage(page);
        return <PaginationElement key={page} page={page} activePage={activePage} changePage={goToPage} />;
      })}
      <PaginationItem disabled={isLastPage}>
        <PaginationLink onClick={goToNextPage} next />
      </PaginationItem>
      <PaginationItem disabled={isLastPage}>
        <PaginationLink onClick={goToLastPage} last />
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
