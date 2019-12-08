import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PaginationItems from '../PaginationItems';

class MyPagination extends Component {
  handleClick = number => {
    const { currentPage } = this.props;

    currentPage(number);
  }

  render() {
    const { pages, activePage } = this.props;
    const isFirstPage = activePage === 1 && true;
    const isLastPage = activePage === pages[pages.length - 1] && true;

    return (
      <div>
        {pages.length !== 0 &&
          <Pagination>
            <PaginationItem disabled={isFirstPage}>
              <PaginationLink onClick={this.handleClick.bind(this, pages[0])} first />
            </PaginationItem>
            <PaginationItem disabled={isFirstPage}>
              <PaginationLink onClick={this.handleClick.bind(this, activePage - 1)} previous />
            </PaginationItem>
            {pages.map(number =>
              <PaginationItems
                key={number}
                number={number}
                activePage={activePage}
                changePage={this.handleClick}
              />
            )}
            <PaginationItem disabled={isLastPage}>
              <PaginationLink onClick={this.handleClick.bind(this, activePage + 1)} next />
            </PaginationItem>
            <PaginationItem disabled={isLastPage}>
              <PaginationLink onClick={this.handleClick.bind(this, pages[pages.length - 1])} last />
            </PaginationItem>
          </Pagination>
        }
      </div>
    );
  }
}

export default MyPagination;
