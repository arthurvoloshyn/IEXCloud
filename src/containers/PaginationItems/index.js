import React, { Component } from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';

class PaginationItems extends Component {
  handleClick = number => {
    const { changePage } = this.props;

    changePage(number);
  }

  render() {
    const { number, activePage } = this.props;

    return (
      <PaginationItem id={`item_${number}`} className={number === activePage ? 'active' : ''}>
        <PaginationLink id={number} onClick={this.handleClick.bind(this, number)}>
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  }
}

export default PaginationItems;
