import { all, call, spawn } from 'redux-saga/effects';

import searchInput from 'app/searchInput';

export default function* rootSaga() {
  const sagas = [
    searchInput.saga.watchMakeRequestForDetails,
    searchInput.saga.watchMakeRequestForSearch
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
