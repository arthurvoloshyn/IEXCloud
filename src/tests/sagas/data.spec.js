import { put, call, delay, takeLatest, all } from 'redux-saga/effects';

import { requestData, requestDataSuccess } from '../../actions';

import { fetchData } from '../../api';

import rootSaga, { fetchDataAsync, watchFetchData } from '../../sagas/data';

import { FETCHED_DATA } from '../../consts';

describe('Data saga workers', () => {
  const generator = fetchDataAsync();
  /* eslint-disable no-unused-vars */
  const data = {
    financials: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };
  /* eslint-enable */

  it('requestData', () => {
    const result = generator.next().value;
    expect(result).toEqual(put(requestData()));
  });

  it('fetchData', () => {
    const result = generator.next().value;
    expect(result).toEqual(call(fetchData));
  });

  it('delay', () => {
    const result = generator.next().value;
    expect(result).toEqual(delay(400));
  });

  it('requestDataSuccess', () => {
    const result = generator.next().value;
    const done = generator.next().done;
    expect(result).toEqual(put(requestDataSuccess()));
    expect(done).toBeTruthy();
  });
});

describe('Data saga watcher', () => {
  it('FETCHED_DATA', () => {
    const generator = watchFetchData();
    const result = generator.next().value;
    const done = generator.next().done;
    expect(result).toEqual(takeLatest(FETCHED_DATA, fetchDataAsync));
    expect(done).toBeTruthy();
  });
});

describe('Sagas', () => {
  it('Root saga', () => {
    const generator = rootSaga();
    const result = generator.next().value;
    const done = generator.next().done;
    expect(result).toEqual(all([watchFetchData()]));
    expect(done).toBeTruthy();
  });
});
