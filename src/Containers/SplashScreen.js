// Libraries
import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// Utilities
import { ScreenKey } from '../Constants';
import { Colors, Metrics, Images } from '../Themes';
import I18n from '../I18n';

class SplashScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={Images.splash}
          style={styles.backgroundImage} />
      </View>
    );

  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueSky,
  },
  backgroundImage: {
    // flex: 1,
    top: 0,
    left: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  }
});