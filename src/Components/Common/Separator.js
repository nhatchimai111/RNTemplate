// Libraries
import React, { PureComponent } from 'react';
import {
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

// Utilities

//Components

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

Separator.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ])
}

const styles = EStyleSheet.create({

});