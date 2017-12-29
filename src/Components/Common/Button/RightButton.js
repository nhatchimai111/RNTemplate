import React, { PureComponent } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Metrics } from '../Themes';

export default class LeftButton extends PureComponent {

  render() {

    const { title, leftMenu } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <MaterialCommunityIcons name={null} size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  }
}

LeftButton.defaultProps = {

};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.blueSky
  },
});