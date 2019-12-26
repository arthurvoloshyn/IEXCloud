import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import { sortDrag, fetchData, currentPage } from '../../actions';

import Loader from '../../components/Loader';
import Error from '../../components/Error';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

const enhance = connect(({ data, activePage }) => ({ data, activePage }), { fetchData, sortDrag, currentPage });

class Home extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    if (!localStorage['applicationState']) {
      fetchData();
    }
  }

  render() {
    const {
      data: {
        result: { financials = [] },
        loading,
        error,
        page = []
      },
      sortDrag,
      currentPage,
      activePage
    } = this.props;

    const notEmtyTable = financials && financials.length;
    const notEmtyPagination = page && page.length;

    return (
      <Container className="mt-5">
        <Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            <div className="content">
              {notEmtyTable && <Table result={financials} sortDrag={sortDrag} activePage={activePage} />}
              {notEmtyPagination && <Pagination currentPage={currentPage} activePage={activePage} pages={page} />}
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    page: PropTypes.array,
    result: PropTypes.shape({
      financials: PropTypes.array
    })
  }),
  fetchData: PropTypes.func,
  sortDrag: PropTypes.func,
  currentPage: PropTypes.func,
  activePage: PropTypes.number
};

Home.defaultProps = {
  data: {
    loading: false,
    error: false,
    page: [],
    result: {
      financials: []
    }
  },
  fetchData: () => {},
  sortDrag: () => {},
  currentPage: () => {},
  activePage: 1
};

export default enhance(Home);
