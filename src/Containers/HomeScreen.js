import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ScreenKey } from '../Constants';
import { Colors, Metrics } from '../Themes';
import I18n from '../I18n';

import NavBar from '../Components/Common/NavBar';
import Button from '../Components/Common/Button';

import MovieActions from '../Redux/MoviesRedux';
import MoviesList from './MoviesContainer';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // this.props.getMoviesRequest();
  }

  render() {

    // console.log('====================================');
    // console.log('HomeScreen render this.props: ', this.props);
    // console.log('====================================');
    return (
      <View style={styles.container}>

        <NavBar title={I18n.t('home')}
          isHideRightButton
          onPressLeftButton={() => this.props.navigation.navigate(ScreenKey.DRAWER_TOGGLE)}
        />

        <View style={[styles.body]}>
          {/* {this.renderMovies(this.props)} */}
          <MoviesList />
        </View>

      </View>
    );
  }

  // renderMovies = (props) => {
  //   try {
  //     const { moviesData: { fetching, movies } } = props;

  //     if (fetching) {
  //       return (<ActivityIndicator size="large" color={Colors.blueSky} />);
  //     } else if (!fetching && movies) {
  //       // console.log('====================================');
  //       // console.log('renderMovies movies: ', movies);
  //       // console.log('====================================');
  //       return (
  //         <View style={{ flex: 1, paddingTop: 10}}>
  //           <FlatList
  //             data={movies}
  //             keyExtractor={movie => movie.releaseYear}
  //             renderItem={this.renderMovieItem}
  //             ListHeaderComponent={this.renderHeader}
  //             ItemSeparatorComponent={this.renderSeparator}
  //           />
  //         </View>

  //       )
  //     }
  //     return null;

  //   } catch (error) {
  //     console.log("renderMovies error: ", error);
  //   }

  // }

  // renderMovieItem = (movie) => {

  //   // console.log('====================================');
  //   // console.log('renderMovieItem movie: ', movie);
  //   // console.log('====================================');
  //   return (
  //     <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
  //       <View style={{ width: '30%' }}>
  //         <Text>{movie.item.releaseYear}</Text>
  //       </View>
  //       <View style={{ width: '70%' }}>
  //         <Text>{movie.item.title}</Text>
  //       </View>
  //     </View>
  //   )
  // }

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: Metrics.horizontalLineHeight,
  //         width: "86%",
  //         backgroundColor: Colors.blueSky,
  //         marginLeft: "14%"
  //       }}
  //     />
  //   );
  // }

  // renderHeader = () => {
  //   return (
  //     <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: Colors.blueSky, }}>
  //       <View style={{ width: '30%' }}>
  //         <Text style = {{color: Colors.white, fontSize: 14}}>{`Release Year`}</Text>
  //       </View>
  //       <View style={{ width: '70%' }}>
  //       <Text style = {{color: Colors.white, fontSize: 14}}>{'Title'}</Text>
  //       </View>
  //     </View>
  //   )
  // };


}

const mapStateToProps = (state) => ({
  // moviesData: state.Movies,
})

const mapDispatchToProps = (dispatch) => ({
  // getMoviesRequest: () => dispatch(MovieActions.getMoviesRequest()),
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
  },
  loginLabelWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    // paddingLeft: 10,
    // paddingRight: 20,
  },
  loginIconWrapper: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: Colors.blueSky,
    margin: 10
  }
});