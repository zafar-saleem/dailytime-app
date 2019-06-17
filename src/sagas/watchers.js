import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { newSaga } from './admin/newSaga';
import { listSaga } from './admin/listSaga';
import { detailSaga } from './admin/detailSaga';
import { profileSaga } from './admin/profileSaga';
import { hoursSaga } from './employees/hoursSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_LIST, listSaga);
  yield takeLatest(types.FETCH_ADMIN_PROFILE, profileSaga);
  yield takeLatest(types.ON_SAVE_NEW_EMPLOYEE, newSaga);
  yield takeLatest(types.ON_FILE_MY_HOURS, hoursSaga);
  yield takeLatest(types.FETCH_EMPLOYEE_DETAILS, detailSaga);
}