import * as t from '../actionTypes';
import { setTrailerOrPoster } from '../actions';

describe('setTrailerOrPoster', () => {
  it('return action', () => {
    const text = 'family';
    const action = {
      type: t.SET_TRAILER_OR_POSTER,
      text
    };
    expect(setTrailerOrPoster(text)).toEqual(action);
  });
});
