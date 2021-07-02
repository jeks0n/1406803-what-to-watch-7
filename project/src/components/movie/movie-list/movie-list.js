import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';

function MovieList(props) {
  const {movies, numberOfVisibleMovies} = props;
  const [activeMovie, setActiveMovie] = useState({});

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
  movies: PropTypes.arrayOf(movieProp),
  numberOfVisibleMovies: PropTypes.number,
};

export default MovieList;
