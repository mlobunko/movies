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
    const state = '';
    expect(reducer(state, action)).toEqual('family');
  });
});
