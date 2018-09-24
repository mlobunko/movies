import { combineReducers } from 'redux';
import backdrop from 'app/backdrop';
import description from 'app/description';
import poster from 'app/poster';
import searchInput from 'app/searchInput';

export default combineReducers({
  [backdrop.constants.NAME]: backdrop.reducer,
  [description.constants.NAME]: description.reducer,
  [poster.constants.NAME]: poster.reducer,
  [searchInput.constants.NAME]: searchInput.reducer
});
