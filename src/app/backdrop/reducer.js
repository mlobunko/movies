import * as t from './actionTypes';

export const initialState = '/6lL49SOgBtqiXMs7Y5HWBYH3X9Z.jpg';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_BACKDROP:
      return action.text;
    default:
      return state;
  }
};
