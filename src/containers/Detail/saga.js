import { takeLatest, call, put } from 'redux-saga/effects';
import API from '../../config/api';
import request from '../../utils/request';

import { fetchedSuccess } from './actions';

import { FETCHING } from './constants';

function* fetchingUser({ personId }) {
  console.log(personId, 'Innn2');

  const url = `${API()}/users/${personId}`;
  const options = {
    url,
    method: 'GET'
  };
  const { data } = yield call(request, options);
  if (data) {
    console.log(data, 'data');
    yield put(fetchedSuccess(data));
  }
}

// Individual exports for testing
export default function* detailBoxSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCHING, fetchingUser);
}
