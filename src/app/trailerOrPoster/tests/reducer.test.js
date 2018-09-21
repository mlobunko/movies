import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_TRAILER_OR_POSTER}`, () => {
    const text = {
      posterPath: 'abc',
      trailerPath: 'cba'
    };
    const action = {
      type: t.SET_TRAILER_OR_POSTER,
      text
    };
    const state = {
      posterPath: '',
      trailerPath: ''
    };
    expect(reducer(state, action)).toEqual(text);
  });
});
