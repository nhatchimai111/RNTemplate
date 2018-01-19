// Libraries
import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// Utilities
import { ScreenKey } from '../Constants';
import { Colors, Metrics } from '../Themes';
import I18n from '../I18n';

//Components
import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

// Reduxes
import MovieActions from '../Redux/MoviesRedux';

// Containers
import MoviesList from './MoviesContainer';

class HomeScreen extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('homeScreen')}
          isHideRightButton
          onPressLeftButton={() => this.props.navigation.navigate(ScreenKey.DRAWER_TOGGLE)}
        />

        <View style={[styles.body]}>
          <MoviesList />
        </View>

      </View>
    );
  }

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});