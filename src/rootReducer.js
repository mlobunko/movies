import { combineReducers } from 'redux';
import backdrop from 'app/backdrop';
import description from 'app/description';
import poster from 'app/poster';

export default combineReducers({
  [backdrop.constants.NAME]: backdrop.reducer,
  [description.constants.NAME]: description.reducer,
  [poster.constants.NAME]: poster.reducer
});
