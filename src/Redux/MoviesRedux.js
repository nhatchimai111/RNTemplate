import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { CommonUtils } from "../Utils";

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
  datas: [],
  fetching: false,
})

/* ------------- Reducers ------------- */

// Store API
export const request = (state, action) => {
  // CommonUtils.log('====================================');
  // CommonUtils.log('MoviesRedux getMovies action: ', action);
  // CommonUtils.log('====================================');
  return state.merge({ fetching: true })
}

export const success = (state, action) => {
  // CommonUtils.log('====================================');
  // CommonUtils.log('MoviesRedux getMovies action: ', action);
  // CommonUtils.log('====================================');
  return state.merge({ fetching: false, datas: action.movies })
}

export const failure = (state, action) => {
  // CommonUtils.log('====================================');
  // CommonUtils.log('MoviesRedux getMovies action: ', action);
  // CommonUtils.log('====================================');
  return state.merge({ fetching: false })
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MOVIES_REQUEST]: request,
  [Types.GET_MOVIES_SUCCESS]: success,
  [Types.GET_MOVIES_FAILURE]: failure,
})
