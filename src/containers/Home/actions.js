import { ONCHANGE } from './constants';

export function formSubmittedSuccess(terms) {
  return {
    type: ONCHANGE,
    terms
  };
}
