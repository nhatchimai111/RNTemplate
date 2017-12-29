import { Dimensions, StatusBar, Platform } from 'react-native';

import { Device } from '../Constants';

// See https://mydevice.io/devices/ for device dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

const isIPhoneX = () => {
  const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

  return Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT));
}

// const getStatusBarHeight = () => {

//   return Platform.OS === 'ios' && isIPhoneX() ? Device.IOS_X_STATUS_BAR_HEIGHT : Platform.OS === 'ios' ? Device.IOS_STATUS_BAR_HEIGHT : StatusBar.currentHeight;   
// }

export default {

  // isIPhoneX() {
  //   const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

  //   return Platform.OS === 'ios' &&
  //     ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
  //       (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT));
  // },

  getStatusBarHeight() {

    return Platform.OS === 'ios' && isIPhoneX() ? Device.IOS_X_STATUS_BAR_HEIGHT : Platform.OS === 'ios' ? Device.IOS_STATUS_BAR_HEIGHT : StatusBar.currentHeight;
  }
}