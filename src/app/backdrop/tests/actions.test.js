import * as t from '../actionTypes';
import { setBackdrop } from '../actions';

describe('setBackdrop', () => {
  it('return action', () => {
    const text = 'family';
    const action = {
      type: t.SET_BACKDROP,
      text
    };
    expect(setBackdrop(text)).toEqual(action);
  });
});
