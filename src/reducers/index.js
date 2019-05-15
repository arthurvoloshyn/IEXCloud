import { combineReducers } from 'redux';
import data from './data';
import activePage from './activePage';

const rootReducer = combineReducers({
  data,
  activePage
});

export default rootReducer;
