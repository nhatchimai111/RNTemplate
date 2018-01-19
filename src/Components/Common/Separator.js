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

    console.tron.display({
      name: 'this.props',
      value: this.props,
      preview: 'when you click here, it might show this.props',
      important: true,
      // image: 'http://placekitten.com/g/400/400'
    })
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