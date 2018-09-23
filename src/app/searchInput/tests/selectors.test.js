import {
  getBackdropPathFromData,
  getDescriptionFromData,
  getIdFromSelected,
  getList,
  getPosterPathFromData,
  getSearchResultFromData,
  getSearchResultFromState
} from '../selectors';

import { detailsData } from './mocks';

describe('getBackdropPathFromData', () => {
  it('return correct part path', () => {
    expect(getBackdropPathFromData(detailsData)).toEqual(
      '/6lL49SOgBtqiXMs7Y5HWBYH3X9Z.jpg'
    );
  });
});

describe('getDescriptionFromData', () => {
  it('return right data', () => {
    const description = {
      title: 'The Lion King',
      tagline:
        "Life's greatest adventure is finding your place in the Circle of Life.",
      overview:
        "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
      genres: 'Family, Animation, Drama',
      productionCompanies:
        'Walt Disney Pictures, Walt Disney Animation Studios',
      releaseDate: '1994-06-23',
      runtime: '89',
      revenue: '987,483,777',
      voteAvarage: '8.1'
    };
    expect(getDescriptionFromData(detailsData)).toEqual(description);
  });
});

describe('getIdFromSelected', () => {
  it('return correct id', () => {
    const selected = {
      id: '123'
    };
    expect(getIdFromSelected(selected)).toEqual('123');
  });
});

describe('getList', () => {
  it('return list from array of objects', () => {
    const expectedList = 'Family, Animation, Drama';
    expect(getList(detailsData['genres'])).toEqual(expectedList);
  });
});

describe('getPosterPathFromData', () => {
  it('return correct part path', () => {
    expect(getPosterPathFromData(detailsData)).toEqual(
      '/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg'
    );
  });
});

describe('getSearchResultFromData', () => {
  it('return correct array', () => {
    const data = {
      results: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    };

    const expectedArr = ['a', 'b', 'c', 'd', 'e'];
    expect(getSearchResultFromData(data)).toEqual(expectedArr);
  });
});

describe('getSearchResultFromState', () => {
  it('return correct part of state', () => {
    const state = {
      searchInput: {
        searchResult: ['a', 'b', 'c']
      }
    };
    expect(getSearchResultFromState(state)).toEqual(['a', 'b', 'c']);
  });
});
