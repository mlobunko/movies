import * as t from './actionTypes';

export const initialState = {
  suggestions: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_ERROR:
      return {
        ...state,
        error: 'Something went wrong'
      };
    case t.SET_ERROR_TO_NULL:
      return {
        ...state,
        error: ''
      };
    case t.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions
      };
    default:
      return state;
  }
};
