import * as t from './actionTypes';

export const initialState = {
  title: 'The Lion King',
  tagline:
    "Life's greatest adventure is finding your place in the Circle of Life.",
  overview:
    "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
  genres: 'Family, Animation, Drama',
  productionCompanies: 'Walt Disney Pictures, Walt Disney Animation Studios',
  releaseDate: '1994-06-23',
  runtime: '89',
  revenue: '987,483,777',
  voteAvarage: '8.1'
};
export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_DESCRIPTION:
      return {
        title: action.description.title,
        tagline: action.description.tagline,
        overview: action.description.overview,
        genres: action.description.genres,
        productionCompanies: action.description.productionCompanies,
        releaseDate: action.description.releaseDate,
        runtime: action.description.runtime,
        revenue: action.description.revenue,
        voteAvarage: action.description.voteAvarage
      };
    default:
      return state;
  }
};
