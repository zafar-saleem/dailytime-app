import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';
import listReducer from './admin/listReducer';
import profileReducer from './admin/profileReducer';
import hoursReducer from './employees/hoursReducer';
import detailsReducer from './admin/detailsReducer';
import deleteEmployeeReducer from './admin/deleteEmployeeReducer';
import updateEmployeeReducer from './admin/updateEmployeeReducer';

const rootReducer = combineReducers({
  register,
  login,
  newReducer,
  listReducer,
  profileReducer,
  hoursReducer,
  detailsReducer,
  deleteEmployeeReducer,
  updateEmployeeReducer
});

export default rootReducer;
