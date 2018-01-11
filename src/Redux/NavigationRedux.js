import { NavigationActions } from 'react-navigation';

import MainNav from '../Navigation/AppNavigation';
import { ScreenKey } from '../Constants';

import { AppStateTypes } from '../Redux/AppStateRedux';
import { LoginTypes } from '../Redux/LoginRedux';


const { navigate, reset } = NavigationActions;
const { getStateForAction } = MainNav.router;

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: ScreenKey.SPLASH_SCREEN })
)
const NOT_LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: ScreenKey.LOGIN_SCREEN })
  ]
}))
const LOGGED_IN_STATE = getStateForAction(reset({
  index: 0,
  actions: [
    navigate({ routeName: ScreenKey.DRAWER_NAV })
  ]
}))
/**
 * Creates an navigation action for dispatching to Redux.
 *
 * @param {string} routeName The name of the route to go to.
 */
// const navigateTo = routeName => () => navigate({ routeName })

export function reducer(state = INITIAL_STATE, action) {
  let nextState

  console.log('====================================');
  console.log('NavigationRedux action.type: ', action.type);
  console.log('NavigationRedux LoginTypes: ', LoginTypes);
  console.log('====================================');
  switch (action.type) {
    case AppStateTypes.SET_REHYDRATION_COMPLETE:
      return NOT_LOGGED_IN_STATE
    case LoginTypes.LOGOUT:
      return NOT_LOGGED_IN_STATE
    case LoginTypes.LOGIN_SUCCESS:
      return LOGGED_IN_STATE
    case LoginTypes.AUTO_LOGIN:
      return LOGGED_IN_STATE
  }
  nextState = getStateForAction(action, state)
  return nextState || state
}

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
}
