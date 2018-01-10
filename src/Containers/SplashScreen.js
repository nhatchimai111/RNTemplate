import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ScreenKey } from '../Constants';
import { Colors, Metrics } from '../Themes';
import I18n from '../I18n';

import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

class SplashScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={require('../Images/splash.png')}
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
    // resizeMode: 'repeat'
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  }
});