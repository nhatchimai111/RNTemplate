import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';

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