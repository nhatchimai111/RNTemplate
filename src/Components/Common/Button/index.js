import React, { PureComponent } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors, Metrics } from '../../../Themes';
import Icon from '../Icon';

export default class Button extends PureComponent {

  render() {

    const { onPress, label, isHideLabel, isHideIcon, buttonStyle, buttonIcon, 
      labelWrapper, iconWrapper, iconType, name, titleText, labelText, iconColor } = this.props;
    const labelView = isHideLabel ? null : <View style={[styles.labelWrapper, labelWrapper]}><Text style={[styles.labelText, labelText]}>{label}</Text></View>;
    const iconView = isHideIcon ? null : <View style={[styles.iconWrapper, iconWrapper]}><Icon iconType={iconType} name={name} color={iconColor}  /></View>;

    return (
      <TouchableOpacity onPress={() => onPress()}
        style={[styles.container, buttonStyle]}>
        {iconView}
        {labelView}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  onPress: () => { },
  label: "",
  isHideIcon: false,
  isHideLabel: false,
  iconType: null,
  color: Colors.white,
  labelWrapper: {},
  iconWrapper: {},
};

const styles = EStyleSheet.create({
  container: {
    // backgroundColor: Colors.blueSky,
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
  },
  labelWrapper: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // backgroundColor: 'blue',
    // paddingLeft: 10,
    // paddingRight: 20,
  },
  labelText: {
    color: Colors.white,
    fontSize: 20
  },
  iconWrapper: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // paddingLeft: 10
  }
});