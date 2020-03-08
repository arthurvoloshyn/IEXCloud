import data, { initState } from '../../reducers/data';

import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DRAG_HAPPEND } from '../../consts';

describe('Data reducer', () => {
  it('REQUESTED_DATA after situation without error', () => {
    const action = {
      type: REQUESTED_DATA
    };

    const expectedReducerRequested = {
      result: {},
      loading: true,
      error: false
    };

    expect(data(initState, action)).toEqual(expectedReducerRequested);
  });

  it('REQUESTED_DATA after error', () => {
    const initialStateWithError = {
      result: {},
      loading: false,
      error: true
    };

    const action = {
      type: REQUESTED_DATA
    };

    const expectedReducerRequested = {
      result: {},
      loading: true,
      error: false
    };

    expect(data(initialStateWithError, action)).toEqual(expectedReducerRequested);
  });

  it('REQUESTED_DATA_SUCCEEDED', () => {
    const stateBeforeSuccess = {
      result: {},
      loading: true,
      error: false
    };

    const action = {
      type: REQUESTED_DATA_SUCCEEDED,
      result: {
        financials: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        symbol: 'APPL'
      }
    };

    const { symbol } = action.result;

    const expectedReducerSucceeded = {
      result: {
        financials: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          [11, 12]
        ],
        symbol
      },
      loading: false,
      error: false
    };

    expect(data(stateBeforeSuccess, action)).toEqual(expectedReducerSucceeded);
  });

  it('REQUESTED_DATA_FAILED', () => {
    /* eslint-disable no-unused-vars */
    const stateBeforeError = {
      result: {},
      loading: true,
      error: false
    };
    /* eslint-enable */

    const action = {
      type: REQUESTED_DATA_FAILED
    };

    const expectedReducerFailed = {
      result: {},
      loading: false,
      error: true
    };

    expect(data(initState, action)).toEqual(expectedReducerFailed);
  });

  it('DRAG_HAPPEND', () => {
    const initialStateWithoutDrag = {
      result: {
        financials: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          [11, 12]
        ],
        pages: [1, 2]
      },
      loading: false,
      error: false
    };

    const action = {
      type: DRAG_HAPPEND,
      droppableIndexStart: 0,
      droppableIndexEnd: 1,
      currentPageIndex: 0
    };

    const { pages } = initialStateWithoutDrag.result;

    const expectedReducerDrag = {
      result: {
        financials: [
          [2, 1, 3, 4, 5, 6, 7, 8, 9, 10],
          [11, 12]
        ],
        pages
      },
      loading: false,
      error: false
    };

    expect(data(initialStateWithoutDrag, action)).toEqual(expectedReducerDrag);
  });
});
