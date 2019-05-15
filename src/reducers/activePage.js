import { CURRENT_PAGE } from '../consts';

export const initState = 1;

export default (state = initState, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.number;
    default:
      return state;
  }
};
