import * as t from './actionTypes';

export const initialState = {
  posterPath: '/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg',
  trailerPath: '4sj1MT05lAA'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_TRAILER_OR_POSTER:
      return {
        posterPath: action.text.posterPath,
        trailerPath: action.text.trailerPath
      };
    default:
      return state;
  }
};
