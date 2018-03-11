import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signupRequest: ['userName', 'passWord', 'email'],
  signupSuccess: ['userName'],
  signupFailure: ['error'],
//   logout: null,
//   autosignUp: null
})

export const SignupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userName: null,
  passWord: null,
  email: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to signUp
export const request = (state) => state.merge({ fetching: true })

// we've successfully signUp
export const success = (state, { userName }) =>
  state.merge({ fetching: false, error: null, userName })

// we've had a problem signUp
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

// we've logged out
// export const logout = (state) => INITIAL_STATE

// startup saga invoked autosignUp
// export const autosignUp = (state) => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_REQUEST]: request,
  [Types.SIGNUP_SUCCESS]: success,
  [Types.SIGNUP_FAILURE]: failure,
//   [Types.LOGOUT]: logout,
//   [Types.AUTO_signUp]: autosignUp
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (signUpState) => signUpState.userName !== null;