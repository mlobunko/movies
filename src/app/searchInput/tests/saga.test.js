import { testSaga } from 'redux-saga-test-plan';

import backdrop from 'app/backdrop';
import description from 'app/description';
import poster from 'app/poster';

import * as actions from '../actions';
import * as model from '../model';
import * as selectors from '../selectors';
import * as t from '../actionTypes';

import {
  errorHandler,
  watchMakeRequestForDetails,
  watchMakeRequestForSearch
} from '../saga';

const errorFromStateTrue = 'error';
const errorFromStateFalse = '';
const response = {
  json: () => {}
};
const e = 'error';
const dataErrorTrue = {
  status_message: '123'
};

describe('errorHandler', () => {
  it('run correctly', () => {
    testSaga(errorHandler, e)
      .next()
      .put(actions.setError())

      .next()
      .call(console.log, `error: ${e}`)

      .next()
      .isDone();
  });
});

describe('watchMakeRequestForDetails', () => {
  const id = '123';
  const dataErrorFalse = {
    genres: [{ name: 'f' }, { name: 'g' }],
    production_companies: [{ name: 'a' }, { name: 'b' }],
    revenue: 12345
  };

  it('run correctly', () => {
    testSaga(watchMakeRequestForDetails)
      .next()
      .take(t.MAKE_REQUEST_FOR_DETAILS)

      .next(id)
      .select(selectors.getErrorFromState)

      .next(errorFromStateTrue)
      .put(actions.setErrorToNull())

      .back()
      .next(errorFromStateFalse)
      .call(fetch, model.getRequestMovieDetails(id))

      .throw(e)
      .call(errorHandler, e)

      .back()
      .next(response)
      .call([response, response.json])

      .next(dataErrorTrue)
      .call(errorHandler, dataErrorTrue)

      .back()
      .next(dataErrorFalse)
      .put(
        backdrop.actions.setBackdrop(
          selectors.getBackdropPathFromData(dataErrorFalse)
        )
      )

      .next()
      .put(
        description.actions.setDescription(
          selectors.getDescriptionFromData(dataErrorFalse)
        )
      )

      .next()
      .put(
        poster.actions.setPoster(
          selectors.getPosterPathFromData(dataErrorFalse)
        )
      )

      .finish()
      .next()
      .isDone();
  });
});

describe('watchMakeRequestForSearch', () => {
  const valueForSearch = '123';
  const dataErrorFalse = {
    results: ['a', 'b', 'c']
  };

  it('run correctly', () => {
    testSaga(watchMakeRequestForSearch)
      .next()
      .take(t.MAKE_REQUEST_FOR_SEARCH)

      .next(valueForSearch)
      .select(selectors.getErrorFromState)

      .next(errorFromStateTrue)
      .put(actions.setErrorToNull())

      .back()
      .next(errorFromStateFalse)
      .call(fetch, model.getRequestSearchMovies(valueForSearch))

      .throw(e)
      .call(errorHandler, e)

      .back()
      .next(response)
      .call([response, response.json])

      .next(dataErrorTrue)
      .call(errorHandler, dataErrorTrue)

      .back()
      .next(dataErrorFalse)
      .put(
        actions.setSuggestions(selectors.getSuggestionsFromData(dataErrorFalse))
      )

      .finish()
      .next()
      .isDone();
  });
});
