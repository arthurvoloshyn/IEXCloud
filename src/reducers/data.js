import { load } from 'redux-localstorage-simple';

import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DATA_PER_PAGE, DRAG_HAPPEND } from '../consts';

import { chunkArray, getPages, dragging } from '../utils';

export let BASE_DATA = load({ namespace: 'applicationState' });

if (!BASE_DATA || !BASE_DATA.data || !BASE_DATA.data.length) {
  BASE_DATA = {
    data: {
      result: {},
      loading: false,
      error: false,
      page: []
    }
  };
}

export default (state = BASE_DATA.data, { type, result, payload }) => {
  switch (type) {
    case REQUESTED_DATA: {
      return {
        result: {},
        loading: true,
        error: false,
        page: []
      };
    }
    case REQUESTED_DATA_SUCCEEDED: {
      const { financials: res } = result;
      const financials = chunkArray(res, DATA_PER_PAGE);
      const page = getPages(financials);

      return {
        result: {
          ...result,
          financials
        },
        loading: false,
        error: false,
        page
      };
    }
    case REQUESTED_DATA_FAILED: {
      return {
        result: {},
        loading: false,
        error: true,
        page: []
      };
    }
    case DRAG_HAPPEND: {
      const { droppableIndexStart, droppableIndexEnd, activePage } = payload;
      const { result: newState } = state;
      const { financials: res } = newState;
      const currentIndex = activePage - 1;

      const financials = dragging(droppableIndexStart, droppableIndexEnd, res, currentIndex);

      return {
        ...state,
        result: {
          ...newState,
          financials
        }
      };
    }
    default: {
      return state;
    }
  }
};
