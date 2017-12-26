import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import ScreenKey from '../Constants/ScreenKey';

class BScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{'B Screen'}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(ScreenKey.HOME_SCREEN)}>
          <Text>{'Go to Home Screen'}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(BScreen);