import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { sortDrag, fetchData, currentPage } from '../../actions';
import Loader from '../../components/Loader';
import MyTable from '../Table';
import Pagination from '../Pagination';

const enhance = connect(
  ({ data, activePage }) => ({ data, activePage }),
  { fetchData, sortDrag, currentPage }
);

class Home extends Component {
  componentDidMount = () => {
    const { fetchData } = this.props;

    if (localStorage['applicationState'] === undefined) {
      fetchData();
    }
  }

  render() {
    const { data: { result, loading, error, page }, sortDrag, currentPage, activePage } = this.props;

    return (
      <Container className="mt-5">
        <Row>
          {loading ? <Loader /> :
            error ? <p className="loading text-danger">Error, try again...</p> :
              <div className="content">
                {result.financials && result.financials.length &&
                  <MyTable
                    result={result.financials}
                    sortDrag={sortDrag}
                    activePage={activePage}
                  />
                }
                <Pagination
                  currentPage={currentPage}
                  activePage={activePage}
                  pages={page}
                />
              </div>}
        </Row>
      </Container>
    );
  }
}

export default enhance(Home);
