import { getRequestMovieDetails, getRequestSearchMovies } from '../model';

describe('getRequestMovieDetails', () => {
  it('return correct request', () => {
    const id = '123';
    expect(getRequestMovieDetails(id)).toEqual(
      'https://api.themoviedb.org/3/movie/123?api_key=0a2434b06859a3e06995a42f36a3042b&language=en-US'
    );
  });
});

describe('getRequestSearchMovies', () => {
  it('return correct request', () => {
    const title = 'flower';
    expect(getRequestSearchMovies(title)).toEqual(
      'https://api.themoviedb.org/3/search/movie?api_key=0a2434b06859a3e06995a42f36a3042b&language=en-US&query=flower&page=1&include_adult=false'
    );
  });
});
