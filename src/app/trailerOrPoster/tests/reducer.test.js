import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_TRAILER_OR_POSTER}`, () => {
    const text = 'family';
    const action = {
      type: t.SET_TRAILER_OR_POSTER,
      text
    };
    expect(reducer(initialState, action)).toEqual(text);
  });
});
