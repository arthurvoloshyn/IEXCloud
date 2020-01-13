import data, { initState } from '../../reducers/data';

import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DRAG_HAPPEND, DATA_PER_PAGE } from '../../consts';

import { chunkArray, getPages } from '../../utils';

describe('Data reducer', () => {
  it('REQUESTED_DATA after situation without error', () => {
    const action = {
      type: REQUESTED_DATA
    };

    const expectedReducerRequested = {
      result: {},
      loading: true,
      error: false,
      pages: []
    };

    expect(data(initState, action)).toEqual(expectedReducerRequested);
  });

  it('REQUESTED_DATA after error', () => {
    const initialStateWithError = {
      result: {},
      loading: false,
      error: true,
      pages: []
    };

    const action = {
      type: REQUESTED_DATA
    };

    const expectedReducerRequested = {
      result: {},
      loading: true,
      error: false,
      pages: []
    };

    expect(data(initialStateWithError, action)).toEqual(expectedReducerRequested);
  });

  it('REQUESTED_DATA_SUCCEEDED', () => {
    const stateBeforeSuccess = {
      result: {},
      loading: true,
      error: false,
      pages: []
    };

    const action = {
      type: REQUESTED_DATA_SUCCEEDED,
      result: {
        financials: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    };

    const financials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const chunkedFinancials = chunkArray(financials, DATA_PER_PAGE);
    const pages = getPages(chunkedFinancials);

    const expectedReducerSucceeded = {
      result: {
        financials: chunkedFinancials
      },
      loading: false,
      error: false,
      pages
    };

    expect(data(stateBeforeSuccess, action)).toEqual(expectedReducerSucceeded);
  });

  it('REQUESTED_DATA_FAILED', () => {
    /* eslint-disable no-unused-vars */
    const stateBeforeError = {
      result: {},
      loading: true,
      error: false,
      pages: []
    };
    /* eslint-enable */

    const action = {
      type: REQUESTED_DATA_FAILED
    };

    const expectedReducerFailed = {
      result: {},
      loading: false,
      error: true,
      pages: []
    };

    expect(data(initState, action)).toEqual(expectedReducerFailed);
  });

  it('DRAG_HAPPEND', () => {
    const initialStateWithoutDrag = {
      result: {
        financials: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          [11, 12]
        ]
      },
      loading: false,
      error: false,
      pages: [1, 2]
    };

    const action = {
      type: DRAG_HAPPEND,
      payload: {
        droppableIndexStart: 0,
        droppableIndexEnd: 1,
        activePage: 1
      }
    };

    const { pages } = initialStateWithoutDrag;

    const expectedReducerDrag = {
      result: {
        financials: [
          [2, 1, 3, 4, 5, 6, 7, 8, 9, 10],
          [11, 12]
        ]
      },
      loading: false,
      error: false,
      pages
    };

    expect(data(initialStateWithoutDrag, action)).toEqual(expectedReducerDrag);
  });
});
