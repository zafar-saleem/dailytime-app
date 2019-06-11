import { put, call } from 'redux-saga/effects';
import { listService } from '../../services/admin/listService';

import * as types from '../../actions'

export function* listSaga(payload) {
  try {
    const response = yield call(listService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEES_LIST_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_LIST_SUCCESS, error });
  }
}