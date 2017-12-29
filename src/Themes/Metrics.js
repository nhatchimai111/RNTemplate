import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
let { width, height } = Dimensions.get('window');
if (Platform.OS == 'android') {
  height = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
  width = ExtraDimensions.get('REAL_WINDOW_WIDTH');
}

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: StyleSheet.hairlineWidth,
  // screenWidth: width < height ? width : height,
  screenWidth: width,
  // screenHeight: width < height ? height : width,
  screenHeight: height,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  softMenuBarHeight: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),
  statusBarHeight: (Platform.OS === 'ios') ? 20 : ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
