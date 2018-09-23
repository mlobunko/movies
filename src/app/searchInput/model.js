import * as constants from './constants';

export const getRequestMovieDetails = id =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${
    constants.KEY
  }&language=en-US`;

export const getRequestSearchMovies = title =>
  `https://api.themoviedb.org/3/search/movie?api_key=${
    constants.KEY
  }&language=en-US&query=${title}&page=1&include_adult=false`;
