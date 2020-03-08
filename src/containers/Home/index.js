import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import { localStorageData } from '../../consts';

import { sortDrag, fetchData, changePage } from '../../actions';

import { getPages } from '../../utils';

import Loader from '../../components/Loader';
import Error from '../../components/Error';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import EmptyPage from '../../components/EmptyPage';

const enhance = connect(({ data, activePage }) => ({ data, activePage }), { fetchData, sortDrag, changePage });

class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      result: PropTypes.shape({
        financials: PropTypes.array,
        symbol: PropTypes.string
      })
    }),
    fetchData: PropTypes.func,
    sortDrag: PropTypes.func,
    changePage: PropTypes.func,
    activePage: PropTypes.number
  };

  static defaultProps = {
    data: {
      loading: false,
      error: false,
      result: {
        financials: [],
        symbol: ''
      }
    },
    fetchData: () => {},
    sortDrag: () => {},
    changePage: () => {},
    activePage: 1
  };

  componentDidMount() {
    const { fetchData } = this.props;

    if (!localStorageData) {
      fetchData();
    }
  }

  render() {
    const {
      data: {
        result: { financials = [], symbol },
        loading,
        error
      },
      sortDrag,
      changePage,
      activePage
    } = this.props;

    const pages = getPages(financials);

    return (
      <Container className="mt-3" fluid="md">
        <Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            <div className="content">
              {financials.length ? (
                <>
                  <h1 className="text-center mb-3">Symbol: {symbol}</h1>
                  <Table result={financials} sortDrag={sortDrag} activePage={activePage} />
                  <Pagination changePage={changePage} activePage={activePage} pages={pages} />
                </>
              ) : (
                <EmptyPage />
              )}
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

export default enhance(Home);
