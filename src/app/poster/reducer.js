import * as t from './actionTypes';

export const initialState = '/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_POSTER:
      return action.text;
    default:
      return state;
  }
};
