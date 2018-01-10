import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
// import AppNavigation from '../Navigation/AppNavigation';

// const navReducer = (state, action) => {
//   const newState = AppNavigation.router.getStateForAction(action, state);
//   return newState || state;
// }

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    // nav: navReducer,
    nav: require('./NavigationRedux').reducer,
    Movies: require('./MoviesRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    login: require('./LoginRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga);
}