import * as types from './index';

export const fileHoursAction = hours => {
  return {
    type: types.ON_FILE_MY_HOURS,
    hours
  }
};
