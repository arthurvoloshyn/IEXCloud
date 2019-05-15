import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, DATA_PER_PAGE, DRAG_HAPPEND } from '../consts';

export const initialState = {
  result: {},
  loading: false,
  error: false,
  page: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_DATA:
      return {
        result: {},
        loading: true,
        error: false,
        page: []
      };
    case REQUESTED_DATA_SUCCEEDED:
      const data = action.result;
      const result = [], page = [];

      for (let i = 1; i <= Math.ceil(data.financials.length / DATA_PER_PAGE); i++) {
        const LastData = i * DATA_PER_PAGE;
        const FirstData = LastData - DATA_PER_PAGE;
        result[i - 1] = data.financials.slice(FirstData, LastData);

        if (page.indexOf(i) === -1) {
          page.push(i);
        }
      }

      data.financials = result;

      return {
        result: data,
        loading: false,
        error: false,
        page: page
      };
    case REQUESTED_DATA_FAILED:
      return {
        result: {},
        loading: false,
        error: true,
        page: []
      };
    case DRAG_HAPPEND:
      const {
        droppableIndexStart,
        droppableIndexEnd,
        activePage
      } = action.payload;
      const newState = state.result;

      if (droppableIndexStart !== droppableIndexEnd) {
        const list = newState.financials[activePage - 1].splice(droppableIndexStart, 1);
        newState.financials[activePage - 1].splice(droppableIndexEnd, 0, ...list);
      }

      return {
        result: newState,
        loading: false,
        error: false,
        page: state.page
      };
    default:
      return state;
  }
};
