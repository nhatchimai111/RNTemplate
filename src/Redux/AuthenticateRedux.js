import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { CommonUtils } from "../Utils";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authenticateRequest: ['authenticate'],
  authenticateSuccess: ['authenticate'],
  authenticateFailure: ['error'],
  logout: null,
  autoAuthenticate: null
})

export const AuthenticateTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: {
    userName: null,
    passWord: null,
    email: null
  },
  isLogin: false,
  isSignup: false,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to autoAuthenticate
export const request = (state) => state.merge({ fetching: true })

// we've successfully autoAuthenticate
export const success = (state, action) => {

  // CommonUtils.log('====================================');
  // CommonUtils.log("AuthenticateRedux success action: ", action);
  // CommonUtils.log('====================================');
  const { authenticate } = action;
  return state.merge({ fetching: false, error: null, ...authenticate })
}

// we've had a problem autoAuthenticate
export const failure = (state, { error }) => state.merge({ fetching: false, error })

// we've logged out
export const logout = (state) => state.merge(...state, INITIAL_STATE)

// startup saga invoked autoAuthenticate
export const autoAuthenticate = (state) => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTHENTICATE_REQUEST]: request,
  [Types.AUTHENTICATE_SUCCESS]: success,
  [Types.AUTHENTICATE_FAILURE]: failure,
  [Types.LOGOUT]: logout,
  [Types.AUTO_AUTHENTICATE]: autoAuthenticate
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isAuthenticate = (state) => state.user.userName !== null;
export const isAuthenticate = (state) => state.isLogin || state.isSignup;