import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import {getMoviePropType} from '../../utils/props';

function App(props) {
  return <MainPage movies={props.movies} promo={props.promo}/>;
}

App.propTypes = {
  movies: PropTypes.arrayOf(getMoviePropType()),
  promo: getMoviePropType(),
};

export default App;
