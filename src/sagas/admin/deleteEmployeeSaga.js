import { put, call } from 'redux-saga/effects';
import { deleteEmployeeService } from '../../services/admin/deleteEmployeeService';

import * as types from '../../actions'

export function* deleteEmployeeSaga(payload) {
  try {
    const response = yield call(deleteEmployeeService, payload);
    yield [
      put({ type: types.ON_DELETE_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_DELETE_EMPLOYEE_SUCCESS, error });
  }
}