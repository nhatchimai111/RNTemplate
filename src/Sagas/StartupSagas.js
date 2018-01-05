import { put } from 'redux-saga/effects';
import MovieActions from '../Redux/MoviesRedux';
// import LocationActions from '../Redux/LocationRedux'

// process STARTUP actions
export function * startup (action) {
  // yield put(MovieActions.getMovies())
  /* ********************************************************
  * Readonly API Calls are better handled through code push *
  * *********************************************************/
  // yield put(ScheduleActions.getScheduleUpdates())
  // yield put(LocationActions.getNearbyUpdates())
}
