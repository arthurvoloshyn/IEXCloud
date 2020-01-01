export const REQUESTED_DATA = 'REQUESTED_DATA';
export const REQUESTED_DATA_SUCCEEDED = 'REQUESTED_DATA_SUCCEEDED';
export const REQUESTED_DATA_FAILED = 'REQUESTED_DATA_FAILED';
export const FETCHED_DATA = 'FETCHED_DATA';

export const DRAG_HAPPEND = 'DRAG_HAPPEND';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const DATA_PER_PAGE = 10;

const BASE_PATH = 'https://sandbox.iexapis.com/stable';
const ENDPOINT_PATH = '/stock/AAPL/financials/12';
const QUERY_PARAM = 'token=';
const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';
export const URL = `${BASE_PATH}${ENDPOINT_PATH}?${QUERY_PARAM}${API_KEY}`;
