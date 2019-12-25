import { load } from 'redux-localstorage-simple';

import { CURRENT_PAGE } from '../consts';

export let BASE_PAGE = load({ namespace: 'applicationState' });

if (!BASE_PAGE || !BASE_PAGE.activePage || !BASE_PAGE.activePage.length) {
  BASE_PAGE = {
    activePage: 1
  };
}

export default (state = BASE_PAGE.activePage, { type, number }) => {
  switch (type) {
    case CURRENT_PAGE:
      return number;
    default:
      return state;
  }
};
