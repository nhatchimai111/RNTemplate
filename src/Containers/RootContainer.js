// Libraries
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-navigation';

// Utilities
import { Colors } from '../Themes';

// Components
import StatusBar from '../Components/Common/StatusBar';

//Reduxes
import StartupActions from '../Redux/StartupRedux';

// Persist
import ReduxPersist from '../Config/ReduxPersist';

// Navigation
import ReduxNavigation from '../Navigation/ReduxNavigation';

class RootContainer extends PureComponent {
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
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  }
});
