import * as t from '../actionTypes';
import { setDescription } from '../actions';

describe('setDescription', () => {
  it('should return action', () => {
    const description = {
      title: 'a',
      tagline: 'b',
      overview: 'c',
      genres: 'd',
      productionCompanies: 'e',
      releaseDate: 'f',
      runtime: 'g',
      revenue: 'h',
      voteAvarage: 'i'
    };
    const expectedAction = {
      type: t.SET_DESCRIPTION,
      description
    };
    expect(setDescription(description)).toEqual(expectedAction);
  });
});
