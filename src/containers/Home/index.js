import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import { sortDrag, fetchData, changePage } from '../../actions';

import Loader from '../../components/Loader';
import Error from '../../components/Error';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import EmptyPage from '../../components/EmptyPage';

const enhance = connect(({ data, activePage }) => ({ data, activePage }), { fetchData, sortDrag, changePage });

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
        pages = []
      },
      sortDrag,
      changePage,
      activePage
    } = this.props;

    const notEmtyTable = financials && financials.length;
    const notEmtyPagination = pages && pages.length;
    const isEmtyPage = !notEmtyTable && !notEmtyPagination;

    return (
      <Container className="mt-5">
        <Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            <div className="content">
              {notEmtyTable ? <Table result={financials} sortDrag={sortDrag} activePage={activePage} /> : null}
              {notEmtyPagination ? <Pagination changePage={changePage} activePage={activePage} pages={pages} /> : null}
              {isEmtyPage && <EmptyPage />}
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
    pages: PropTypes.array,
    result: PropTypes.shape({
      financials: PropTypes.array
    })
  }),
  fetchData: PropTypes.func,
  sortDrag: PropTypes.func,
  changePage: PropTypes.func,
  activePage: PropTypes.number
};

Home.defaultProps = {
  data: {
    loading: false,
    error: false,
    pages: [],
    result: {
      financials: []
    }
  },
  fetchData: () => {},
  sortDrag: () => {},
  changePage: () => {},
  activePage: 1
};

export default enhance(Home);
