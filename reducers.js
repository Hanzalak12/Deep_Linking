import { combineReducers } from 'redux';
import helloReducer from './src/containers/Home/reducer';
import detailReducer from './src/containers/Detail/reducer';

export default function createReducer() {
  const rootReducer = combineReducers({
    hello: helloReducer,
    detail: detailReducer
  });
  return rootReducer;
}
