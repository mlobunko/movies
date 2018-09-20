import * as t from '../actionTypes';
import { setTrailer, setPoster } from '../actions';

describe('setTrailer', () => {
  it('return action', () => {
    const text = 'family';
    const action = {
      type: t.SET_TRAILER,
      text
    };
    expect(setTrailer(text)).toEqual(action);
  });
});

describe('setPoster', () => {
  it('return action', () => {
    const text = 'family';
    const action = {
      type: t.SET_POSTER,
      text
    };
    expect(setPoster(text)).toEqual(action);
  });
});
