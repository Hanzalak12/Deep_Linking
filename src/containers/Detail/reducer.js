/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { FETCHING, FETCHED_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  user: {},
  loader: false
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCHING:
        console.log("kkk");
        draft.loader = true;
        break;
      case FETCHED_SUCCESS:
        draft.user = action.user;
        draft.loader = false;
        break;
    }
  });

export default appReducer;
