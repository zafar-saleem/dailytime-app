import { put, call } from 'redux-saga/effects';
import { detailService } from '../../services/admin/detailService';

import * as types from '../../actions'

export function* detailSaga(payload) {
  try {
    const response = yield call(detailService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, error });
  }
}