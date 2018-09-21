import { combineReducers } from 'redux';
import backdrop from 'app/backdrop';
import description from 'app/description';
import trailerOrPoster from 'app/trailerOrPoster';

export default combineReducers({
  [backdrop.constants.NAME]: backdrop.reducer,
  [description.constants.NAME]: description.reducer,
  [trailerOrPoster.constants.NAME]: trailerOrPoster.reducer
});
