import { CHANGE_PAGE } from '../consts';

export const initState = 1;

export default (state = initState, { type, page }) => {
  switch (type) {
    case CHANGE_PAGE:
      return page;
    default:
      return state;
  }
};
