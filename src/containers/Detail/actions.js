import { FETCHING, FETCHED_SUCCESS } from './constants';

export function fetchingUser({ personId }) {
  console.log(personId);
  return {
    type: FETCHING,
    personId
  };
}
export function fetchedSuccess(data) {
  return {
    type: FETCHED_SUCCESS,
    user: data
  };
}
