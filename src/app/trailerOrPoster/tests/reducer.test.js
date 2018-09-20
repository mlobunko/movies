import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_POSTER}`, () => {
    const text = 'family';
    const action = {
      type: t.SET_POSTER,
      text
    };
    const state = {
      posterPath: '',
      trailerPath: ''
    };
    const expectedState = {
      posterPath: text,
      trailerPath: ''
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`handle ${t.SET_TRAILER}`, () => {
    const text = 'family';
    const action = {
      type: t.SET_TRAILER,
      text
    };
    const state = {
      posterPath: '',
      trailerPath: ''
    };
    const expectedState = {
      posterPath: '',
      trailerPath: text
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
