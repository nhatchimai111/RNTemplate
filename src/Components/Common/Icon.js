import React, { PureComponent } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { Colors, Metrics } from '../../Themes';

export default class Icon extends PureComponent {

  render() {

    // console.log('====================================');
    // console.log('Icon this.props: ', this.props);
    // console.log('====================================');

    const { isHideIcon } = this.props;

    return isHideIcon ? null : (
      <View style={[styles.container]}>
        {this.renderIcon(this.props)}
      </View>
    )
  }

  renderIcon({ name, size, color, iconType }) {

    // console.log('====================================');
    // console.log('Icon name: ', name);
    // console.log('Icon size: ', size);
    // console.log('Icon color: ', color);
    // console.log('Icon iconType: ', iconType);
    // console.log('====================================');
    let MaterialCommunityIconsView = null;

    // const { iconType } = props;
    switch (iconType) {
      case 'MaterialCommunityIcons':
        MaterialCommunityIconsView = (<MaterialCommunityIcons name={name} size={size} color={color} />);
        return MaterialCommunityIconsView;
      case 'Ionicons':
        const IoniconsView = (<Ionicons name={name} size={size} color={color} />);
        return IoniconsView;
      case 'Entypo':
        const EntypoView = (<Entypo name={name} size={size} color={color} />);
        return EntypoView;

      default:
        MaterialCommunityIconsView = (<MaterialCommunityIcons name={name} size={size} color={color} />);
        return MaterialCommunityIconsView;
    }

    // return <MaterialCommunityIcons name={name} size={size} color={color}/>;
  }

}

Icon.defaultProps = {
  onPress: () => { },
  label: "",
  isHideIcon: false,
  iconType: null,
  color: Colors.white,
  name: "menu",
  size: 30
};

const styles = EStyleSheet.create({
  container: {
    // backgroundColor: Colors.blueSky
  },
});