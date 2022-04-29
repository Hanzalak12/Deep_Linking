import { takeLatest, call, put } from 'redux-saga/effects';

import { formSubmittedSuccess } from './actions';

import { SUBMIT_FORM } from './constants';

function* submitLogin() {
  console.log('Innn2');
  yield put(formSubmittedSuccess(true));
}

// Individual exports for testing
export default function* WelcomeBoxSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_FORM, submitLogin);
}
