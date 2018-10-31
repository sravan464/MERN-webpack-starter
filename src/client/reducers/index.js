import { combineReducers } from 'redux';
import { formReducer, historyReducer, businessReducer } from './bim-360-reducer';

export default combineReducers({
  newForm: formReducer,
  history: historyReducer,
  business: businessReducer
});
