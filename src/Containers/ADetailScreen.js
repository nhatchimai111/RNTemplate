import React, { Component } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class ADetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{'A Detail Screen'}</Text>
        
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>{'Back'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ADetailScreen);