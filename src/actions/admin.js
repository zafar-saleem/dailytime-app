import * as types from './index';

export const newEmployeeAction = (employee) => {
  return {
    type: types.ON_SAVE_NEW_EMPLOYEE,
    employee
  }
};

export const employeesListAction = () => {
  return {
    type: types.FETCH_EMPLOYEES_LIST
  }
};

export const adminProfileAction = () => {
  return {
    type: types.FETCH_ADMIN_PROFILE
  }
};

export const employeeDetailsAction = (id) => {
  return {
    type: types.FETCH_EMPLOYEE_DETAILS,
    id
  }
};

export const employeeUpdateAction = (id) => {
  return {
    type: types.UPDATE_EMPLOYEE_DETAILS,
    id
  }
};

export const employeeDeleteAction = (id) => {
  return {
    type: types.ON_DELETE_EMPLOYEE,
    id
  }
};
