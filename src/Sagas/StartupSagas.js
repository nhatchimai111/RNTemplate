import { put, select } from 'redux-saga/effects';

import AppStateActions from '../Redux/AppStateRedux';
import LoginActions, { isLoggedIn } from '../Redux/LoginRedux';
import MovieActions from '../Redux/MoviesRedux';

export const selectLoggedInStatus = (state) => isLoggedIn(state.login);

// process STARTUP actions
export function* startup(action) {

  // only get if we don't have it yet
  yield put(AppStateActions.setRehydrationComplete());
  const isLoggedIn = yield select(selectLoggedInStatus);
  if (isLoggedIn) {
    yield put(LoginActions.autoLogin());
  }
}