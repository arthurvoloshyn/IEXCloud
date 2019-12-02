import data, { initialState } from '../../reducers/data';
import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DRAG_HAPPEND } from '../../consts';

describe('Data reducer', () => {
  it('REQUESTED_DATA after situation without error', () => {
    const action = {
      type: REQUESTED_DATA
    };

    expect(data(initialState, action)).toEqual({
      result: {},
      loading: true,
      error: false,
      page: []
    });
  });

  it('REQUESTED_DATA after error', () => {
    const initialStateWithError = {
      result: {},
      loading: false,
      error: true,
      page: []
    };

    const action = {
      type: REQUESTED_DATA
    };

    expect(data(initialStateWithError, action)).toEqual({
      result: {},
      loading: true,
      error: false,
      page: []
    });
  });

  it('REQUESTED_DATA_SUCCEEDED', () => {
    const stateBeforeSuccess = {
      result: {},
      loading: true,
      error: false,
      page: []
    };

    const action = {
      type: REQUESTED_DATA_SUCCEEDED,
      result: {
        financials: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      page: [1, 2]
    };

    expect(data(stateBeforeSuccess, action)).toEqual({
      result: action.result,
      loading: false,
      error: false,
      page: action.page
    });
  });

  it('REQUESTED_DATA_FAILED', () => {
    /* eslint-disable no-unused-vars */
    const stateBeforeError = {
      result: {},
      loading: true,
      error: false,
      page: []
    };
    /* eslint-enable */

    const action = {
      type: REQUESTED_DATA_FAILED
    };

    expect(data(initialState, action)).toEqual({
      result: {},
      loading: false,
      error: true,
      page: []
    });
  });

  it('DRAG_HAPPEND', () => {
    const initialStateWithoutDrag = {
      result: {
        financials: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12]]
      },
      loading: false,
      error: false,
      page: [1, 2]
    };

    const action = {
      type: DRAG_HAPPEND,
      payload: {
        droppableIndexStart: 0,
        droppableIndexEnd: 1,
        activePage: 1
      }
    };

    expect(data(initialStateWithoutDrag, action)).toEqual({
      result: {
        financials: [[2, 1, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12]]
      },
      loading: false,
      error: false,
      page: initialStateWithoutDrag.page
    });
  });
});
