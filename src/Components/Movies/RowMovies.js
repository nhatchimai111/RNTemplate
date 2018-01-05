import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Themes';

export default class RowMovies extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('====================================');
    console.log('RowMovies render this.props: ', this.props);
    console.log('====================================');
    const { movie } = this.props;

    return !movie ? null :
      (
        <View style={styles.container}>
          <View style={styles.releaseYearWrapper}>
            <Text>{movie.item.releaseYear}</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text>{movie.item.title}</Text>
          </View>
        </View>
      );
  }
}

RowMovies.defaultProps = {
  movie: null
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
  },
  releaseYearWrapper: {
    width: '30%'
  },
  titleWrapper: {
    width: '70%'
  },
  text: {
    color: Colors.black, 
    fontSize: 12
  }
});