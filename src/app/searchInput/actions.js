import * as t from './actionTypes';

export const makeRequestForSearch = valueForSearch => ({
  type: t.MAKE_REQUEST_FOR_SEARCH,
  valueForSearch
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

export const setSuggestions = suggestions => ({
  type: t.SET_SUGGESTIONS,
  suggestions
});
