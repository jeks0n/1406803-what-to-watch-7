import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';

function MovieList(props) {
  const {movies, numberOfVisibleMovies, isMoviesLoaded} = props;
  const [activeMovie, setActiveMovie] = useState({});

  if (!isMoviesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const activeMovieHandler = (movie) => {
    setActiveMovie(movie);
  };

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} isActiveMovie={movie.id === activeMovie.id} onActiveMovieChange={activeMovieHandler} />).slice(0, numberOfVisibleMovies)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieProp).isRequired,
  isMoviesLoaded: PropTypes.bool,
  numberOfVisibleMovies: PropTypes.number,
};

export default MovieList;
