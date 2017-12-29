import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import {ScreenKey} from '../Constants';
import { Colors } from '../Themes';
import I18n from '../I18n';

import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

class BScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // return (
    //   <View>
    //     <Text>{'B Screen'}</Text>
    //     <TouchableOpacity onPress={() => this.props.navigation.navigate(ScreenKey.HOME_SCREEN)}>
    //       <Text>{'Go to Home Screen'}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => this.props.navigation.navigate(ScreenKey.DRAWER_TOGGLE)}>
    //       <Text>{'DrawerToggle'}</Text>
    //     </TouchableOpacity>
    //   </View>
    // );

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('bScreen')}
          isHideRightButton
          onPressLeftButton={() => navigate(ScreenKey.DRAWER_TOGGLE)}
        />

        <View style={[styles.body]}>

          <Button onPress={() => navigate(ScreenKey.HOME_SCREEN)}
            labelWrapper={styles.loginLabelWrapper}
            label={I18n.t('home')}
            buttonStyle={[styles.button]}
            labelStyle={styles.titleText}
            isHideIcon
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(BScreen);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginLabelWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    // paddingLeft: 10,
    // paddingRight: 20,
  },
  loginIconWrapper: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10
  },
  button:{
    width: 150, 
    height: 50, 
    backgroundColor: Colors.blueSky, 
    margin: 10
  }
});