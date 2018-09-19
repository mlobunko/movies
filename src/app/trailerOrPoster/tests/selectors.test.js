import { NAME } from '../constants';
import { getAll } from '../selectors';

describe('getAll', () => {
  it('return part of state', () => {
    const state = {
      [NAME]: 'family'
    };
    expect(getAll(state)).toEqual(state[NAME]);
  });
});
