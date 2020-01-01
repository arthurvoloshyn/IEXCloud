import { REQUESTED_DATA, REQUESTED_DATA_SUCCEEDED, REQUESTED_DATA_FAILED, FETCHED_DATA, DRAG_HAPPEND, CHANGE_PAGE } from '../consts';

export const requestData = () => ({ type: REQUESTED_DATA });
export const requestDataSuccess = result => ({ type: REQUESTED_DATA_SUCCEEDED, result });
export const requestDataError = () => ({ type: REQUESTED_DATA_FAILED });
export const fetchData = () => ({ type: FETCHED_DATA });

export const sortDrag = (droppableIndexStart, droppableIndexEnd, activePage) => ({
  type: DRAG_HAPPEND,
  payload: {
    droppableIndexStart,
    droppableIndexEnd,
    activePage
  }
});

export const changePage = page => ({ type: CHANGE_PAGE, page });
