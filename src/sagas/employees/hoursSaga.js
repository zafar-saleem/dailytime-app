import { put, call } from 'redux-saga/effects';
import { hoursService } from '../../services/employees/hoursService';

import * as types from '../../actions'

export function* hoursSaga(payload) {
  try {
    const response = yield call(hoursService, payload);
    yield [
      put({ type: types.ON_FILE_MY_HOURS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_FILE_MY_HOURS_SUCCESS, error });
  }
}