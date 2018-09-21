import * as t from '../actionTypes';
import { setPoster } from '../actions';

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
