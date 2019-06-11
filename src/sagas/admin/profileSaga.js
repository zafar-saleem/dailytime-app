import { put, call } from 'redux-saga/effects';
import { profileService } from '../../services/admin/profileService';

import * as types from '../../actions'

export function* profileSaga(payload) {
  try {
    const response = yield call(profileService, payload);
    yield [
      put({ type: types.FETCH_ADMIN_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_ADMIN_PROFILE_SUCCESS, error });
  }
}