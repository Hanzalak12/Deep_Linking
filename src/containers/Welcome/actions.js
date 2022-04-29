import { FORM_SUBMITTED_SUCCESS } from './constants';

export function formSubmittedSuccess(terms) {
  return {
    type: FORM_SUBMITTED_SUCCESS,
    terms
  };
}
