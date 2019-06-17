import * as types from '../../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.ON_FILE_MY_HOURS_SUCCESS:
      return { ...state, response };
    case types.ON_FILE_MY_HOURS_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
};