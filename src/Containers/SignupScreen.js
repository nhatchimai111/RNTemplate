import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ScreenKey from '../Constants/ScreenKey';

class SignupScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{'Signup Screen'}</Text>
        <TouchableOpacity onPress={this.onPressSignup}>
          <Text>{'Go to Home Screen'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressSignup = () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);