import * as t from '../actionTypes';
import reducer, { initialState } from '../reducer';

describe('reducer', () => {
  it('return default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`handle ${t.SET_DESCRIPTION}`, () => {
    const newDescription = {
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
    const action = {
      type: t.SET_DESCRIPTION,
      description: newDescription
    };
    expect(reducer(initialState, action)).toEqual(newDescription);
  });
});
