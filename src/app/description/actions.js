import * as t from "./actionTypes";

export const setTitle = text => ({
  type: t.SET_TITLE,
  text
});

export const setTagline = text => ({
  type: t.SET_TAGLINE,
  text
});

export const setOverview = text => ({
  type: t.SET_OVERVIEW,
  text
});

export const setGenres = text => ({
  type: t.SET_GENRES,
  text
});

export const setProductionCompanies = text => ({
  type: t.SET_PRODUCTION_COMPANIES,
  text
});

export const setReleaseDate = text => ({
  type: t.SET_RELEASE_DATE,
  text
});

export const setRunTime = text => ({
  type: t.SET_RUNTIME,
  text
});

export const setRevenue = text => ({
  type: t.SET_REVENUE,
  text
});

export const setVoteAvarage = text => ({
  type: t.SET_VOTE_AVARAGE,
  text
});
