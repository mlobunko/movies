import * as t from './actionTypes';

export const makeRequestForSearch = value => ({
  type: t.MAKE_REQUEST_FOR_SEARCH,
  value
});

export const makeRequestForDetails = id => ({
  type: t.MAKE_REQUEST_FOR_DETAILS,
  id
});

export const setError = () => ({
  type: t.SET_ERROR
});

export const setErrorToNull = () => ({
  type: t.SET_ERROR_TO_NULL
});

export const setSearchResult = result => ({
  type: t.SET_SEARCH_RESULT,
  result
});
