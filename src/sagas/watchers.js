import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { newSaga } from './admin/newSaga';
import { listSaga } from './admin/listSaga';
import { profileSaga } from './admin/profileSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_LIST, listSaga);
  yield takeLatest(types.FETCH_ADMIN_PROFILE, profileSaga);
}