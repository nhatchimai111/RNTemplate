import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    Movies: require('./MoviesRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    // authentication: require('./SignupRedux').reducer,
    // authentication: require('./LoginRedux').reducer,
    authenticate: require('./AuthenticateRedux').reducer,
    
  })

  return configureStore(rootReducer, rootSaga);
}