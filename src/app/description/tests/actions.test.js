import * as t from "../actionTypes";
import {
  setGenres,
  setOverview,
  setProductionCompanies,
  setReleaseDate,
  setRevenue,
  setRunTime,
  setTagline,
  setTitle,
  setVoteAvarage
} from "../actions";

describe("setGenres", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_GENRES,
      text
    };
    expect(setGenres(text)).toEqual(expectedAction);
  });
});

describe("setOverview", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_OVERVIEW,
      text
    };
    expect(setOverview(text)).toEqual(expectedAction);
  });
});

describe("setProductionCompanies", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_PRODUCTION_COMPANIES,
      text
    };
    expect(setProductionCompanies(text)).toEqual(expectedAction);
  });
});

describe("setReleaseDate", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_RELEASE_DATE,
      text
    };
    expect(setReleaseDate(text)).toEqual(expectedAction);
  });
});

describe("setRevenue", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_REVENUE,
      text
    };
    expect(setRevenue(text)).toEqual(expectedAction);
  });
});

describe("setRuntime", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_RUNTIME,
      text
    };
    expect(setRunTime(text)).toEqual(expectedAction);
  });
});

describe("setTagline", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_TAGLINE,
      text
    };
    expect(setTagline(text)).toEqual(expectedAction);
  });
});

describe("setTitle", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_TITLE,
      text
    };
    expect(setTitle(text)).toEqual(expectedAction);
  });
});

describe("setVoteAvarage", () => {
  it("should return action", () => {
    const text = "family";
    const expectedAction = {
      type: t.SET_VOTE_AVARAGE,
      text
    };
    expect(setVoteAvarage(text)).toEqual(expectedAction);
  });
});
