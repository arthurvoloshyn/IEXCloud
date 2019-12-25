import { takeLatest, put, call, all, delay } from 'redux-saga/effects';

import { requestData, requestDataSuccess, requestDataError } from '../actions';

import { FETCHED_DATA } from '../consts';

import { fetchData } from '../api';

export function* fetchDataAsync() {
  try {
    yield put(requestData());
    const data = yield call(fetchData);
    yield delay(400);
    yield put(requestDataSuccess(data));
  } catch {
    yield put(requestDataError());
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCHED_DATA, fetchDataAsync);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
