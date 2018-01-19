// Libraries
import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Utilities
import { Colors } from '../../Themes';
import I18n from '../../I18n';

//Components

export default class HeaderMovies extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.releaseYearWrapper}>
          <Text style={styles.text}>{I18n.t('releaseYear')}</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.text}>{I18n.t('title')}</Text>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 10, 
    paddingBottom: 10, 
    backgroundColor: Colors.blueSky,
  },
  releaseYearWrapper: {
    width: '30%'
  },
  titleWrapper: {
    width: '70%'
  },
  text: {
    color: Colors.white, 
    fontSize: 16
  }
});