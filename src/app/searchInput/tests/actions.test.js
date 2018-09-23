import * as t from '../actionTypes';
import {
  makeRequestForDetails,
  makeRequestForSearch,
  setError,
  setErrorToNull,
  setSearchResult
} from '../actions';

describe('makeRequestForDetails', () => {
  it('return action', () => {
    const id = '123';
    const expectedAction = {
      type: t.MAKE_REQUEST_FOR_DETAILS,
      id
    };
    expect(makeRequestForDetails(id)).toEqual(expectedAction);
  });
});

describe('makeRequestForSearch', () => {
  it('return action', () => {
    const value = 'family';
    const expectedAction = {
      type: t.MAKE_REQUEST_FOR_SEARCH,
      value
    };
    expect(makeRequestForSearch(value)).toEqual(expectedAction);
  });
});

describe('setError', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.SET_ERROR
    };
    expect(setError()).toEqual(expectedAction);
  });
});

describe('setErrorToNull', () => {
  it('return action', () => {
    const expectedAction = {
      type: t.SET_ERROR_TO_NULL
    };
    expect(setErrorToNull()).toEqual(expectedAction);
  });
});

describe('setSearchResult', () => {
  it('return action', () => {
    const result = ['a', 'b', 'c', 'd', 'e'];
    const expectedAction = {
      type: t.SET_SEARCH_RESULT,
      result
    };
    expect(setSearchResult(result)).toEqual(expectedAction);
  });
});
