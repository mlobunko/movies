import * as t from './actionTypes';

export const initialState = {
  posterPath: '',
  trailerPath: '4sj1MT05lAA'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_TRAILER:
      return {
        ...state,
        trailerPath: action.text
      };
    case t.SET_POSTER:
      return {
        ...state,
        posterPath: action.text
      };
    default:
      return state;
  }
};
