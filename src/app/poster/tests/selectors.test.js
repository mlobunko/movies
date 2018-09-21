import { NAME } from '../constants';
import { getPoster } from '../selectors';

const state = {
  [NAME]: 'family'
};

describe('getPoster', () => {
  it('return part of state', () => {
    expect(getPoster(state)).toEqual('family');
  });
});
