import React, { PureComponent, Component } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Metrics } from '../../Themes';

import Button from './Button';

export default class NavBar extends PureComponent {

  render() {

    const { title, onPressLeftButton, onPressRightButton, isHideLeftButton, isHideRightButton, nameIconLeft, iconTypeLeft } = this.props;

    // console.log('====================================');
    // console.log('NavBar this.props: ', this.props);
    // console.log('====================================');

    const LeftButtonView = (<Button onPress={() => onPressLeftButton()}
      iconWrapper={styles.leftIconWrapper}
      iconType={iconTypeLeft}
      label={'Menu'}
      name={nameIconLeft}
      buttonStyle={styles.button}
      labelStyle={styles.titleText}
      isHideLabel
    />)

    // const LeftButtonView = (<Button onPress={() => onPressLeftButton()}
    //   iconWrapper={styles.leftIconWrapper}
    //   iconType={"MaterialCommunityIcons"}
    //   label={'Menu'}
    //   name={'menu'}
    //   buttonStyle={styles.button}
    //   labelStyle={styles.titleText}
    //   isHideLabel
    // />)

    const RightButtonView = (<Button onPress={() => onPressRightButton()}
      iconWrapper={styles.rightIconWrapper}
      iconType={'MaterialCommunityIcons'}
      label={'Extend'}
      name={'dots-vertical'}
      buttonStyle={styles.button}
      labelStyle={styles.titleText}
      isHideLabel
    />)

    return (
      <View style={styles.container}>

        {isHideLeftButton ? null : LeftButtonView}

        <View style={[styles.titleWrapper, {paddingLeft: isHideLeftButton ? 50 : 0, paddingRight: isHideRightButton ? 50 : 0}]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        {isHideRightButton ? null : RightButtonView}
      </View>
    )
  }
}

NavBar.defaultProps = {
  title: "",
  isHideLeftButton: false,
  isHideRightButton: false,
  onPressLeftButton: () => { },
  onPressRightButton: () => { },
  nameIconLeft: "menu",
  nameIconRight: "dots-vertical",
  iconTypeLeft: "MaterialCommunityIcons",
  iconTypeRight: "MaterialCommunityIcons",
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.blueSky,
    // backgroundColor: 'green',
    height: Platform.OS === 'ios' ? 60 : 50,
    // paddingTop: Platform.OS === 'ios' ? 10 : 0,
    
  },
  titleWrapper: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'violet'
  },
  titleText: {
    fontSize: 20,
    color: Colors.white
  },
  button: {
    flex: 1,
    // backgroundColor: 'green'
  },
  
  leftIconWrapper: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  rightIconWrapper: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10
  }
});