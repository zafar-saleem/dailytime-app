import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';
import listReducer from './admin/listReducer';
import profileReducer from './admin/profileReducer';
import hoursReducer from './employees/hoursReducer';

const rootReducer = combineReducers({
  register,
  login,
  newReducer,
  listReducer,
  profileReducer,
  hoursReducer
});

export default rootReducer;