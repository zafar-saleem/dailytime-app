import { put, call } from 'redux-saga/effects';
import { updateService } from '../../services/admin/updateService';

import * as types from '../../actions'

export function* updateSaga(payload) {
  try {
    const response = yield call(updateService, payload);
    yield [
      put({ type: types.UDPATE_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UDPATE_EMPLOYEE_DETAILS_SUCCESS, error });
  }
}