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
      ...initialState,
      error: 'Something went wrong'
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_ERROR_TO_NULL}`, () => {
    const state = {
      ...initialState,
      error: 'Something went wrong'
    };
    const action = {
      type: t.SET_ERROR_TO_NULL
    };
    const expectedState = {
      ...initialState,
      error: ''
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_SUGGESTIONS}`, () => {
    const suggestions = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const action = {
      type: t.SET_SUGGESTIONS,
      suggestions
    };
    const expectedState = {
      ...initialState,
      suggestions
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
