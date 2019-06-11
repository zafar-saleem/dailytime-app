import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';

const rootReducer = combineReducers({
  register, login, newReducer
});

export default rootReducer;