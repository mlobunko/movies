import * as t from './actionTypes';

export const initialState =
  'https://image.tmdb.org/t/p/original/6lL49SOgBtqiXMs7Y5HWBYH3X9Z.jpg';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_BACKDROP:
      return action.text;
    default:
      return state;
  }
};
