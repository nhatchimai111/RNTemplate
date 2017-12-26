import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation';
import ScreenKey from '../Constants/ScreenKey';

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
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate(ScreenKey.HOME_SCREEN)}
          style={styles.uglyDrawerItem}>
          Home Screen
        </Text>
        <Text
          onPress={() => navigation.navigate(ScreenKey.A_STACK)}
          style={styles.uglyDrawerItem}>
          A Screen
        </Text>
        <Text
          onPress={() => navigation.navigate(ScreenKey.B_SCREEN)}
          style={styles.uglyDrawerItem}>
          B Screen
        </Text>
        <Text
          onPress={this.logout}
          style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})
