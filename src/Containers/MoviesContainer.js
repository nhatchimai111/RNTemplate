import React, { PureComponent } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors, Metrics } from '../Themes';

import Row from '../Components/Movies/RowMovies';
import Header from '../Components/Movies/HeaderMovies';
import Separator from '../Components/Common/Separator';

import MovieActions from '../Redux/MoviesRedux';

class MoviesContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMoviesRequest();
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>{this.renderMovies(this.props)}</View>
    );
  }

  renderMovies = (props) => {
    try {
      const { moviesData: { fetching, movies } } = props;

      if (fetching) {
        return (<ActivityIndicator size="large" color={Colors.blueSky} />);
      } else if (!fetching && movies) {
        // console.log('====================================');
        // console.log('renderMovies movies: ', movies);
        // console.log('====================================');
        return (
          <FlatList
            data={movies}
            keyExtractor={movie => movie.releaseYear}
            renderItem={movie => <Row movie={movie} />}
            ListHeaderComponent={() => <Header />}
            ItemSeparatorComponent={() => <Separator style={styles.separator} />}
          />
        )
      }
      return null;

    } catch (error) {
      console.log("renderMovies error: ", error);
    }

  }
}

const mapStateToProps = (state) => ({
  moviesData: state.Movies,
})

const mapDispatchToProps = (dispatch) => ({
  getMoviesRequest: () => dispatch(MovieActions.getMoviesRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

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
  },
  separator: {
    height: Metrics.horizontalLineHeight,
    width: "86%",
    backgroundColor: Colors.blueSky,
    marginLeft: "14%"
  }
});