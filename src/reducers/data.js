import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DRAG_HAPPEND, DATA_PER_PAGE } from '../consts';

import { chunkArray, dragging } from '../utils';

export const initState = {
  result: {},
  loading: false,
  error: false
};

export default (state = initState, { type, result, droppableIndexStart, droppableIndexEnd, currentPageIndex }) => {
  switch (type) {
    case REQUESTED_DATA: {
      return {
        result: {},
        loading: true,
        error: false
      };
    }
    case REQUESTED_DATA_SUCCEEDED: {
      const financials = chunkArray(result.financials, DATA_PER_PAGE);

      return {
        result: {
          ...result,
          financials
        },
        loading: false,
        error: false
      };
    }
    case REQUESTED_DATA_FAILED: {
      return {
        result: {},
        loading: false,
        error: true
      };
    }
    case DRAG_HAPPEND: {
      const financials = dragging(droppableIndexStart, droppableIndexEnd, state.result.financials, currentPageIndex);

      return {
        ...state,
        result: {
          ...state.result,
          financials
        }
      };
    }
    default: {
      return state;
    }
  }
};
