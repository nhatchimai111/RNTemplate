import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import ScreenKey from '../Constants/ScreenKey'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{'Home Screen'}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
          <Text>{'Back'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate(ScreenKey.DRAWER_TOGGLE)}>
          <Text>{'DrawerToggle'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
