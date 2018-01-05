import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Separator extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const { style } = this.props;
    return (
      <View style={style} />
    );
  }
}

Separator.defaultProps = {
  style: {}
}

const styles = EStyleSheet.create({

});