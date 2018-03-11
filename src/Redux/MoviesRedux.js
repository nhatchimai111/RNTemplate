import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMoviesRequest: null,
  getMoviesSuccess: ['movies'],
  getMoviesFailure: null
})

export const MoviesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    // data: require('../Fixtures/movies.json')
    data: {},
    loading: false,
    movies: []
})

/* ------------- Reducers ------------- */

// Store API
export const request = (state, action) => {
  // console.log('====================================');
  // console.log('MoviesRedux getMovies action: ', action);
  // console.log('====================================');
  return state.merge({ fetching: true })
}

export const success = (state, action) => {
  // console.log('====================================');
  // console.log('MoviesRedux getMovies action: ', action);
  // console.log('====================================');
  return state.merge({ fetching: false, movies: action.movies })
}

export const failure = (state, action) => {
  // console.log('====================================');
  // console.log('MoviesRedux getMovies action: ', action);
  // console.log('====================================');
  return state.merge({ fetching: false })
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MOVIES_REQUEST]: request,
  [Types.GET_MOVIES_SUCCESS]: success,
  [Types.GET_MOVIES_FAILURE]: failure,
})
