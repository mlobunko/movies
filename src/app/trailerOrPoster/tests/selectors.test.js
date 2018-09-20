import { NAME } from '../constants';
import { getPoster, getTrailer } from '../selectors';

const state = {
  [NAME]: {
    posterPath: 'family',
    trailerPath: 'abc'
  }
};

describe('getPoster', () => {
  it('return part of state', () => {
    expect(getPoster(state)).toEqual('family');
  });
});

describe('getTrailer', () => {
  it('return part of state', () => {
    expect(getTrailer(state)).toEqual('abc');
  });
});
