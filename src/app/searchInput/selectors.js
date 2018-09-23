import { NAME } from './constants';

export const getBackdropPathFromData = data => data['backdrop_path'];

export const getErrorFromState = state => state[NAME]['error'];

export const getIdFromSelected = result => '' + result['id'];

export const getList = arr => {
  let listString = '';
  arr.forEach(
    (el, i) =>
      i === 0 ? (listString += `${el.name}`) : (listString += `, ${el.name}`)
  );
  return listString;
};

export const getDescriptionFromData = data => {
  const description = {};

  description.title = data['title'];
  description.tagline = data['tagline'];
  description.overview = data['overview'];
  description.genres = getList(data['genres']);
  description.productionCompanies = getList(data['production_companies']);
  description.releaseDate = data['release_date'];
  description.runtime = '' + data['runtime'];
  description.revenue = data['revenue'].toLocaleString('en');
  description.voteAvarage = '' + data['vote_average'];

  return description;
};

export const getPosterPathFromData = data => data['poster_path'];

export const getSearchResultFromData = data => data['results'].slice(0, 5);

export const getSearchResultFromState = state => state[NAME]['searchResult'];
