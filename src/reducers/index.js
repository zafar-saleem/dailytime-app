import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';
import listReducer from './admin/listReducer';

const rootReducer = combineReducers({
  register, login, newReducer, listReducer
});

export default rootReducer;