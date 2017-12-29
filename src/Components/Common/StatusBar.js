import React from 'react';
import { Platform, StyleSheet, StatusBar, Image, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Colors, Metrics, Fonts } from '../../Themes';
import { CommonUtils } from '../../Utils';

export default class StatusBarLight extends React.Component {

  render() {
    // console.log('====================================');
    // console.log(`Width: , ${Metrics.screenWidth} - Height: ${Metrics.screenHeight}`);
    // console.log('====================================');
    
    return (Platform.OS === 'android' && Platform.Version >= 21 && this.props.custom ?
      (
        <Image style={styles.statusBarBG} source={this.props.source}>
          <StatusBar animated
            backgroundColor="rgba(0,0,0,0)"
            barStyle="light-content"
            translucent={true}
            {...this.props}
          />
        </Image>
      ) : (
        <View style={[styles.statusBarBG, { backgroundColor: this.props.backgroundColor || 'white' }]}>
          <StatusBar
            backgroundColor="rgba(0,0,0,0)"
            translucent={false}
            barStyle="dark-content"
            {...this.props}
          />
        </View>
      )
    )
  }
}
StatusBarLight.defaultProps = {
  custom: false
};

const styles = StyleSheet.create({
  statusBarBG: {
    // marginBottom: -Metrics.statusBarHeight,
    marginBottom: Platform.OS === 'ios' ? 0 : -CommonUtils.getStatusBarHeight(),
    // height: Metrics.statusBarHeight,
    height: CommonUtils.getStatusBarHeight(),

    // marginBottom: Platform.OS === 'ios' ? 0 : -Metrics.statusBarHeight,
    // height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,

  },
});