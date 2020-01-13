import activePage, { initState } from '../../reducers/activePage';

import { CHANGE_PAGE } from '../../consts';

describe('activePage reducer', () => {
  it('CHANGE_PAGE', () => {
    const action = {
      type: CHANGE_PAGE,
      page: 1
    };

    const { page } = action;

    expect(activePage(initState, action)).toEqual(page);
  });
});
