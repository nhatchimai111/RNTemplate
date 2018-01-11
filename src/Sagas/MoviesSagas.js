import { call, put } from 'redux-saga/effects';
import MovieActions from '../Redux/MoviesRedux';

export function * getMovies (api, action) {
  let response = yield call(api.getMovies)

  // console.log('====================================');
  // console.log('MovieSages getMovies response: ', response);
  // console.log('====================================');
  if (response.ok) {
    yield put(MovieActions.getMoviesSuccess(response.data.movies));
  }else{
    yield put(MovieActions.getMoviesFailure());
  }
}
