import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';

import getSlideFromRightTransition from './SlideFromRightTransition';
import ScreenKey from '../Constants/ScreenKey';

import SignupScreen from '../Containers/SignupScreen';
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import DrawerContainer from '../Containers/DrawerContainer';
import AScreen from '../Containers/AScreen';
import ADetailScreen from '../Containers/ADetailScreen';
import BScreen from '../Containers/BScreen';

const AStack = StackNavigator({
  [ScreenKey.A_SCREEN]: { screen: AScreen },
  [ScreenKey.A_SCREEN_DETAIL]: { screen: ADetailScreen },
}, {
    headerMode: 'none',
    // initialRouteName: 'Login',
    //   cardStyle: styles.card,
    transitionConfig: getSlideFromRightTransition,
    // mode: 'modal'
  }
)

const DrawerNav = DrawerNavigator({
  [ScreenKey.HOME_SCREEN]: {
    screen: HomeScreen,
  },
  [ScreenKey.A_STACK]: {
    screen: AStack,
  },
  [ScreenKey.B_SCREEN]: {
    screen: BScreen,
  },
}, {
  contentComponent: DrawerContainer
  });

const LoginStack = StackNavigator({
  [ScreenKey.LOGIN_SCREEN]: { screen: LoginScreen },
  [ScreenKey.SIGNUP_SCREEN]: { screen: SignupScreen },
  [ScreenKey.DRAWER_NAV]: { screen: DrawerNav },
}, {
    headerMode: 'none',
    // initialRouteName: 'Login',
    //   cardStyle: styles.card,
    // transitionConfig: getSlideFromRightTransition,
    // mode: 'modal'
  }
)




const MainStack = StackNavigator({
  [ScreenKey.LOGIN_STACK] : { screen: LoginStack },
  // [ScreenKey.DRAWER_NAV]: { screen: DrawerNav },

}, {
    headerMode: 'none',
    initialRouteName: ScreenKey.LOGIN_STACK,
    //   cardStyle: styles.card,
    transitionConfig: getSlideFromRightTransition,
    // mode: 'modal'
  }
)

export default MainStack;