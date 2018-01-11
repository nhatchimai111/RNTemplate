import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import {ScreenKey} from '../Constants';
import { Colors } from '../Themes';
import I18n from '../I18n';

import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

class ADetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // return (
    //   <View>
    //     <Text>{'A Detail Screen'}</Text>
        
    //     <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
    //       <Text>{'Back'}</Text>
    //     </TouchableOpacity>
    //   </View>
    // );

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

          {/* <Button onPress={() => navigate(ScreenKey.HOME_SCREEN)}
            labelWrapper={styles.loginLabelWrapper}
            label={I18n.t('home')}
            buttonStyle={[styles.button]}
            labelStyle={styles.titleText}
            isHideIcon
          /> */}
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