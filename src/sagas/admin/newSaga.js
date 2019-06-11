import { put, call } from 'redux-saga/effects';
import { newService } from '../../services/admin/newService';

import * as types from '../../actions'

export function* newSaga(payload) {
  try {
    const response = yield call(newService, payload);
    yield [
      put({ type: types.ON_SAVE_NEW_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_SAVE_NEW_EMPLOYEE_SUCCESS, error });
  }
}