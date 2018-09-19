import * as t from './actionTypes';

export const initialState = 'fBNpSRtfIUA';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_TRAILER_OR_POSTER:
      return action.text;
    default:
      return state;
  }
};
