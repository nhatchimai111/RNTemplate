// Libraries
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

// Utilities
import { ScreenKey } from '../Constants';
import { Colors, Metrics } from '../Themes';
import I18n from '../I18n';

//Components
import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

// Reduxes
import LoginActions from '../Redux/LoginRedux';

class LoginScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    }
  }

  render() {

    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('logInScreen')}
          isHideLeftButton
          isHideRightButton
        />

        <View style={[styles.body]}>

          <View style={[styles.inputInfoWrapper]}>
            <TextInput
              ref={(email) => (this.inputEmail = email)}
              style={{color: Colors.black, marginBottom: Platform.OS === 'ios' ? 20 : 0 }}
              placeholder={I18n.t('userName').toUpperCase()}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              autoCapitalize={'none'}
              underlineColorAndroid={'transparent'}
              onSubmitEditing={() => this.inputPassword.focus()}
              value={this.state.userName}
              onChangeText={text => this.setState({ userName: text })}
            />

            <TextInput
              ref={(password) => (this.inputPassword = password)}
              style={{ color: Colors.black }}
              placeholder={I18n.t('passWord').toUpperCase()}
              secureTextEntry={true}
              autoCapitalize={'none'}
              returnKeyType={'done'}
              underlineColorAndroid={'transparent'}
              onSubmitEditing={() => this.onPressLogin()}
              value={this.state.passWord}
              onChangeText={text => this.setState({ passWord: text })}
            />

          </View>

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

    const { userName, passWord } = this.state
    // attempt a login - a saga is listening to pick it up from here.
    this.props.login(userName, passWord)
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, passWord) => dispatch(LoginActions.loginRequest(userName, passWord))
  }
}

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
  button: {
    width: 150,
    height: 50,
    backgroundColor: Colors.blueSky,
    margin: 10
  },
  inputInfoWrapper: {
    // marginTop: 10,
    // marginLeft: 30,
    // marginRight: 30,
    height: Metrics.screenHeight / 3,
    width: Metrics.screenWidth - 40,
    // backgroundColor: 'green'
  }
});