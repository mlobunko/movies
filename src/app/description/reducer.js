import * as t from './actionTypes';

export const initialState = {
  title: 'The Godfather',
  tagline: "An offer you can't refuse.",
  overview:
    'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  genres: 'Drama, Crime',
  productionCompanies: 'Paramount',
  releaseDate: 'Alfran Productions',
  runtime: '175',
  revenue: '245,066,411',
  voteAvarage: '8.6'
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
