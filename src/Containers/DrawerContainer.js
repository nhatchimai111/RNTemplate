// Libraries
import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

// Utilities
import I18n from '../I18n';
import { ScreenKey } from '../Constants';
import { Images, Colors, Metrics } from '../Themes';
import { CommonUtils } from '../Utils';

//Components
import Button from '../Components/Common/Button';

// Reduxes
import AuthenticateActions from '../Redux/AuthenticateRedux';

class DrawerContainer extends PureComponent {

  render() {
    const { navigation: { navigate }, logout, activeItemKey } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <Image source={Images.android} resizeMode={Image.resizeMode.contain}
              style={styles.avatarImage} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.body}>

          <Button onPress={() => navigate(ScreenKey.HOME_SCREEN)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('home')}
            buttonStyle={[styles.buttonWrapper, this.changeforegroundRowFocusStyle(activeItemKey, ScreenKey.HOME_SCREEN)]}
            labelText={[this.changeForegroundTextStyle(activeItemKey, ScreenKey.HOME_SCREEN)]}
            iconWrapper={styles.iconWrapper}
            iconType={'Entypo'}
            name={'home'}
            iconColor={this.changeForegroundIconStyle(activeItemKey, ScreenKey.HOME_SCREEN)}
          />

          <Button onPress={() => navigate(ScreenKey.A_STACK)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('aScreen')}
            buttonStyle={[styles.buttonWrapper, this.changeforegroundRowFocusStyle(activeItemKey, ScreenKey.A_STACK)]}
            labelText={[this.changeForegroundTextStyle(activeItemKey, ScreenKey.A_STACK)]}
            iconWrapper={styles.iconWrapper}
            iconType={'MaterialCommunityIcons'}
            name={'projector-screen'}
            iconColor={this.changeForegroundIconStyle(activeItemKey, ScreenKey.A_STACK)}
          />

          <Button onPress={() => navigate(ScreenKey.B_SCREEN)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('bScreen')}
            buttonStyle={[styles.buttonWrapper, this.changeforegroundRowFocusStyle(activeItemKey, ScreenKey.B_SCREEN)]}
            labelText={[this.changeForegroundTextStyle(activeItemKey, ScreenKey.B_SCREEN)]}
            iconWrapper={styles.iconWrapper}
            iconType={'MaterialCommunityIcons'}
            name={'fullscreen-exit'}
            iconColor={this.changeForegroundIconStyle(activeItemKey, ScreenKey.B_SCREEN)}
          />

          <Button onPress={logout}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('logout')}
            buttonStyle={[styles.buttonWrapper]}
            labelText={styles.labelButtonText}
            iconWrapper={styles.iconWrapper}
            iconType={'MaterialCommunityIcons'}
            name={'logout'}
            iconColor={Colors.black}
          />
        </ScrollView>
      </View>
    )
  }

  changeforegroundRowFocusStyle = (activeItemKey, screen) => {

    try {
      if (activeItemKey === screen) {
        return styles.foregroundRowFocus;
      }
      return {};
    } catch (error) {
      console.log('changeforegroundRowFocusStyle error: ', error);
      return {};
    }
  }

  changeForegroundTextStyle = (activeItemKey, screen) => {
    try {
      if (activeItemKey === screen) {
        return styles.textRowFocus;
      }
      return { color: Colors.black };
    } catch (error) {
      console.log('changeForegroundTextStyle error: ', error);
      return { color: Colors.black };
    }
  }

  changeForegroundIconStyle = (activeItemKey, screen) => {
    try {
      if (activeItemKey === screen) {
        return Colors.white;
      }
      return Colors.black;
    } catch (error) {
      console.log('changeForegroundTextStyle error: ', error);
      return Colors.black;
    }
  }
}

const mapStateToProps = (state) => {

  // CommonUtils.log('DrawerContainer mapStateToProps state: ', state)
  return {
    fetching: state.authenticate.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(AuthenticateActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.4,
    backgroundColor: Colors.blueSky,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 0.6
  },
  avatarWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 50
  },
  avatarImage: {
    width: 100,
    height: 100
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: 50,
    // backgroundColor: 'green',
    marginTop: 10,
    marginBottom: 10,
  },
  labelButtonText: {
    color: Colors.black,
    // fontSize: 10
    // fontWeight: 'bold',
  },
  iconWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',

  },
  labelButtonWrapper: {
    flex: 0.8,
    alignItems: 'flex-start',
    // backgroundColor: 'blue',
  },
  foregroundRowFocus: {
    backgroundColor: Colors.blueSky,
    borderRadius: 0
  },
  textRowFocus: {
    color: Colors.white
  }

})
