import { combineReducers } from 'redux';
import backdrop from 'app/backdrop';
// import timer from "app/timer";

export default combineReducers({
  [backdrop.constants.NAME]: backdrop.reducer
  // [timer.constants.NAME]: timer.rootReducer
});
