import activePage, { BASE_PAGE } from '../../reducers/activePage';

import { CURRENT_PAGE } from '../../consts';

const { activePage: initState } = BASE_PAGE;

describe('activePage reducer', () => {
  it('CURRENT_PAGE', () => {
    const action = {
      type: CURRENT_PAGE,
      number: 1
    };

    const { number } = action;

    expect(activePage(initState, action)).toEqual(number);
  });
});
