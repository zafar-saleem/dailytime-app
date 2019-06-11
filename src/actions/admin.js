import * as types from './index';

export const newEmployeeAction = (employee) => {
  return {
    type: types.ON_SAVE_NEW_EMPLOYEE,
    employee
  }
};
