import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_ERROR}`, () => {
    const action = {
      type: t.SET_ERROR
    };
    const expectedState = {
      searchResult: '',
      error: 'Something went wrong'
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_ERROR_TO_NULL}`, () => {
    const state = {
      searchResult: '',
      error: 'Something went wrong'
    };
    const action = {
      type: t.SET_ERROR_TO_NULL
    };
    const expectedState = {
      searchResult: '',
      error: ''
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_SEARCH_RESULT}`, () => {
    const result = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const action = {
      type: t.SET_SEARCH_RESULT,
      result
    };
    const expectedState = {
      searchResult: result,
      error: ''
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
