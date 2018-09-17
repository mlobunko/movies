import * as t from './actionTypes';

export const initialState = {
  title: '',
  tagline: '',
  overview: '',
  genres: '',
  productionCompanies: '',
  releaseDate: '',
  runtime: '',
  revenue: '',
  voteAvarage: ''
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
