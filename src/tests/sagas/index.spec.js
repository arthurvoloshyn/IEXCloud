import { all, fork } from 'redux-saga/effects';

import data from '../../sagas/data';
import sagas from '../../sagas';

describe('Sagas', () => {
  it('Root saga', () => {
    const generator = sagas();
    const result = generator.next().value;
    const done = generator.next().done;
    expect(result).toEqual(all([fork(data)]));
    expect(done).toBeTruthy();
  });
});
