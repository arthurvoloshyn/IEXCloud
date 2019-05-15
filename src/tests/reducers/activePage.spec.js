import activePage, { initState } from '../../reducers/activePage';
import { CURRENT_PAGE } from '../../consts';

describe('activePage reducer', () => {
  it('CURRENT_PAGE', () => {
    const action = {
      type: CURRENT_PAGE,
      number: 1
    };

    expect(activePage(initState, action)).toEqual(
      action.number
    );
  });
});
