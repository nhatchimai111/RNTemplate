import { put, select } from 'redux-saga/effects';

import AppStateActions from '../Redux/AppStateRedux';
import ActhenticateActions, { isAuthenticate } from '../Redux/AuthenticateRedux';
import MovieActions from '../Redux/MoviesRedux';
import { CommonUtils } from '../Utils/';

export const selectAithenticateStatus = (state) => {
  // CommonUtils.log('StartupSagas selectLoggedInStatus state: ', state);
  return isAuthenticate(state.authenticate)
};

// process STARTUP actions
export function* startup(action) {

  // only get if we don't have it yet
  yield put(AppStateActions.setRehydrationComplete());

  const isAuthenticate = yield select(selectAithenticateStatus);
  if (isAuthenticate) {
    yield put(ActhenticateActions.autoAuthenticate());
  }
}