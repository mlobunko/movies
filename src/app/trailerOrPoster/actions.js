import * as t from './actionTypes';

export const setTrailer = text => ({
  type: t.SET_TRAILER,
  text
});

export const setPoster = text => ({
  type: t.SET_POSTER,
  text
});
