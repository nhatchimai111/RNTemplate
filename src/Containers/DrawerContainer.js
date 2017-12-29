import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation';

import I18n from '../I18n';
import { ScreenKey } from '../Constants';
import { Images, Colors, Metrics } from '../Themes';

import Button from '../Components/Common/Button';

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: ScreenKey.LOGIN_STACK })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <Image source={require('../Images/android.png')} resizeMode={Image.resizeMode.contain}
              style={styles.avatarImage} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.body}>

          <Button onPress={() => navigate(ScreenKey.HOME_SCREEN)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('home')}
            buttonStyle={[styles.buttonWrapper, {backgroundColor: Colors.blueSky, borderRadius: 0}]}
            labelText={[{color: Colors.white}]}
            iconWrapper={styles.iconWrapper}
            iconType={'Entypo'}
            name={'home'}
            iconColor={Colors.white}
          />

          <Button onPress={() => navigate(ScreenKey.A_STACK)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('aScreen')}
            buttonStyle={[styles.buttonWrapper]}
            labelText={styles.labelButtonText}
            iconWrapper={styles.iconWrapper}
            iconType={'MaterialCommunityIcons'}
            name={'projector-screen'}
            iconColor={Colors.black}
          />

          <Button onPress={() => navigate(ScreenKey.B_SCREEN)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('bScreen')}
            buttonStyle={[styles.buttonWrapper]}
            labelText={styles.labelButtonText}
            iconWrapper={styles.iconWrapper}
            iconType={'MaterialCommunityIcons'}
            name={'fullscreen-exit'}
            iconColor={Colors.black}
          />

          <Button onPress={() => navigate(ScreenKey.HOME_SCREEN)}
            labelWrapper={styles.labelButtonWrapper}
            label={I18n.t('logOut')}
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
}

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

  }
})
