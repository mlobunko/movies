import { combineReducers } from 'redux';
import backdrop from 'app/backdrop';
import trailerOrPoster from 'app/trailerOrPoster';

export default combineReducers({
  [backdrop.constants.NAME]: backdrop.reducer,
  [trailerOrPoster.constants.NAME]: trailerOrPoster.reducer
});
