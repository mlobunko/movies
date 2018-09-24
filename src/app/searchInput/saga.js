import { take, call, put, select } from 'redux-saga/effects';

import backdrop from 'app/backdrop';
import description from 'app/description';
import poster from 'app/poster';

import * as actions from './actions';
import * as model from './model';
import * as selectors from './selectors';
import * as t from './actionTypes';

export const errorHandler = function*(e) {
  yield put(actions.setError());
  yield call(console.log, `error: ${e}`);
};

export const watchMakeRequestForSearch = function*() {
  while (true) {
    const valueForSearch = yield take(t.MAKE_REQUEST_FOR_SEARCH);
    const errorFromState = yield select(selectors.getErrorFromState);
    if (!!errorFromState) {
      yield put(actions.setErrorToNull());
    }
    try {
      const response = yield call(
        fetch,
        model.getRequestSearchMovies(valueForSearch)
      );
      const data = yield call([response, response.json]);
      if (!!data['status_message']) {
        yield call(errorHandler, data);
      } else {
        yield put(
          actions.setSuggestions(selectors.getSuggestionsFromData(data))
        );
      }
    } catch (e) {
      yield call(errorHandler, e);
    }
  }
};

export const watchMakeRequestForDetails = function*() {
  while (true) {
    const id = yield take(t.MAKE_REQUEST_FOR_DETAILS);
    const errorFromState = yield select(selectors.getErrorFromState);
    if (!!errorFromState) {
      yield put(actions.setErrorToNull());
    }
    try {
      const response = yield call(fetch, model.getRequestMovieDetails(id));
      const data = yield call([response, response.json]);
      if (!!data['status_message']) {
        yield call(errorHandler, data);
      } else {
        yield put(
          backdrop.actions.setBackdrop(selectors.getBackdropPathFromData(data))
        );
        yield put(
          description.actions.setDescription(
            selectors.getDescriptionFromData(data)
          )
        );
        yield put(
          poster.actions.setPoster(selectors.getPosterPathFromData(data))
        );
      }
    } catch (e) {
      yield call(errorHandler, e);
    }
  }
};
