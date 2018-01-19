// Libraries
import React, { PureComponent } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

// Utilities
import {ScreenKey} from '../Constants';
import { Colors } from '../Themes';
import I18n from '../I18n';

//Components
import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

class ADetailScreen extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const {navigation} = this.props;

    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('aDetailScreen')}
          isHideRightButton
          onPressLeftButton={() => navigation.goBack()}
          iconTypeLeft={'Ionicons'}
          nameIconLeft={'ios-arrow-back'}
        />

        <View style={[styles.body]}>

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ADetailScreen);

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