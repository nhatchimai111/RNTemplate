import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-navigation';

import StartupActions from '../Redux/StartupRedux';
// import NotificationActions from '../Redux/NotificationRedux'
import ReduxPersist from '../Config/ReduxPersist'
// import NotificationsBar from '../Components/NotificationsBar'
// import styles from './Styles/RootContainerStyles'

import ReduxNavigation from '../Navigation/ReduxNavigation';

import { Colors } from '../Themes';
import StatusBar from '../Components/Common/StatusBar';

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {

    return (
      <View style={styles.container} >
        <StatusBar backgroundColor={Colors.blueSky} barStyle={'light-content'} />
        <SafeAreaView style={styles.container}>
          <ReduxNavigation />
        </SafeAreaView>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  // notifications: state.notifications.notifications
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  // clearNotifications: () => dispatch(NotificationActions.clearNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  }
});
