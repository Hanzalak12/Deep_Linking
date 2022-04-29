/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { SUBMIT_FORM } from './constants';

// The initial state of the App
export const initialState = {
  liveStreams: 204,
  members: 53
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SUBMIT_FORM:
        draft.liveStreams = action.liveStreams;
        draft.members = action.members;
        break;
    }
  });

export default appReducer;
