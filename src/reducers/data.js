import { load } from 'redux-localstorage-simple';

import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DATA_PER_PAGE, DRAG_HAPPEND } from '../consts';

import { chunkArray, getPages, dragging } from '../utils';

export let BASE_DATA = load({ namespace: 'applicationState' });

if (!BASE_DATA || !BASE_DATA.data || !BASE_DATA.data.result) {
  BASE_DATA = {
    data: {
      result: {},
      loading: false,
      error: false,
      pages: []
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
        pages: []
      };
    }
    case REQUESTED_DATA_SUCCEEDED: {
      const { financials: data } = result;
      const financials = chunkArray(data, DATA_PER_PAGE);
      const pages = getPages(financials);

      return {
        result: {
          ...result,
          financials
        },
        loading: false,
        error: false,
        pages
      };
    }
    case REQUESTED_DATA_FAILED: {
      return {
        result: {},
        loading: false,
        error: true,
        pages: []
      };
    }
    case DRAG_HAPPEND: {
      const { droppableIndexStart, droppableIndexEnd, activePage } = payload;
      const { result } = state;
      const { financials: data } = result;
      const currentPageIndex = activePage - 1;

      const financials = dragging(droppableIndexStart, droppableIndexEnd, data, currentPageIndex);

      return {
        ...state,
        result: {
          ...result,
          financials
        }
      };
    }
    default: {
      return state;
    }
  }
};
