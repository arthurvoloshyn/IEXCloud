import { load } from 'redux-localstorage-simple';

import { CHANGE_PAGE } from '../consts';

export let BASE_PAGE = load({ namespace: 'applicationState' });

if (!BASE_PAGE || !BASE_PAGE.activePage || !BASE_PAGE.activePage.length) {
  BASE_PAGE = {
    activePage: 1
  };
}

export default (state = BASE_PAGE.activePage, { type, page }) => {
  switch (type) {
    case CHANGE_PAGE:
      return page;
    default:
      return state;
  }
};
