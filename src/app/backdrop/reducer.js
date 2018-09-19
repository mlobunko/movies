import * as t from './actionTypes';

export const initialState = '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg';

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_BACKDROP:
      return action.text;
    default:
      return state;
  }
};
