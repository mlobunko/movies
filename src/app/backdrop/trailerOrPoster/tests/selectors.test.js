import { NAME } from '../constants';
import { getAll } from '../selectors';

describe('getAll', () => {
  it('return part of state', () => {
    const state = {
      [NAME]: {
        title: 'a',
        tagline: 'b',
        overview: 'c',
        genres: 'd',
        productionCompanies: 'e',
        releaseDate: 'f',
        runtime: 'g',
        revenue: 'h',
        voteAvarage: 'i'
      }
    };
    expect(getAll(state)).toEqual(state[NAME]);
  });
});
