import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ScreenKey from '../Constants/ScreenKey';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{'Login Screen'}</Text>
        <TouchableOpacity onPress={() => this.onPressLogin()}>
          <Text>{'Go to Home Screen'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(ScreenKey.SIGNUP_SCREEN)}>
          <Text>{'Go to Signup Screen'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressLogin = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: ScreenKey.DRAWER_NAV})
      ]
    })
    this.props.navigation.dispatch(resetAction)

    // this.props.navigation.navigate('BScreen')
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);