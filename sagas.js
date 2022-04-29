import { all } from 'redux-saga/effects';
import DetailSaga from './src/containers/Detail/saga';
function* rootSaga() {
  yield all([DetailSaga]);
}

export default DetailSaga;
