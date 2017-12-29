import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import {ScreenKey} from '../Constants';
import { Colors } from '../Themes';
import I18n from '../I18n';

import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';


class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('logIn')}
          isHideLeftButton
          isHideRightButton
        />

        <View style={[styles.body]}>

          <Button onPress={() => this.onPressLogin()}
            labelWrapper={styles.loginLabelWrapper}
            label={I18n.t('logIn')}
            buttonStyle={[styles.button]}
            labelStyle={styles.titleText}
            isHideIcon
          />

          <Button onPress={() => this.props.navigation.navigate(ScreenKey.SIGNUP_SCREEN)}
            labelWrapper={styles.loginLabelWrapper}
            label={I18n.t('signUp')}
            buttonStyle={[styles.button]}
            labelStyle={styles.titleText}
            isHideIcon
          />
        </View>
      </View>
    );
  }

  onPressLogin = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: ScreenKey.DRAWER_NAV })
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