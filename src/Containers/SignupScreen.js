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

// Components
import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

// Reduxes
// import LoginActions from '../Redux/LoginRedux';
// import SignupActions from '../Redux/SignupRedux';
import AuthenticateActions from '../Redux/AuthenticateRedux';

class SignupScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      email: ""
    }
  }

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('signUpScreen')}
          isHideRightButton
          onPressLeftButton={() => navigation.goBack()}
          iconTypeLeft={'Ionicons'}
          nameIconLeft={'ios-arrow-back'}
        />

        <View style={[styles.inputInfoWrapper]}>
          <TextInput
            ref={(email) => (this.inputEmail = email)}
            style={{ color: Colors.black, marginBottom: Platform.OS === 'ios' ? 20 : 0 }}
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
            onSubmitEditing={() => this.inputEmail.focus()}
            value={this.state.passWord}
            onChangeText={text => this.setState({ passWord: text })}
          />

          <TextInput
            ref={(password) => (this.inputEmail = password)}
            style={{ color: Colors.black }}
            placeholder={I18n.t('email').toUpperCase()}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={() => this.onPressSignup()}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />

        </View>

        <View style={[styles.body]}>

          <Button onPress={() => this.onPressSignup()}
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

  onPressSignup = () => {

    const { userName, passWord, email } = this.state;
    const { authenticate } = this.props;
    // attempt a login - a saga is listening to pick it up from here.
    const user = { userName, passWord, email };
    const isSignup = true;
    const isLogin = false;
    const param = { isSignup, isLogin, user };

    // CommonUtils.log("Login Screen onPressLogin authentication: ", authentication)
    authenticate(param);
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.authenticate.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (param) => dispatch(AuthenticateActions.authenticateRequest(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

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
    alignItems: 'center'
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
  loginLabelWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
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
    height: Metrics.screenHeight / 3,
    width: Metrics.screenWidth - 40,
  }
});