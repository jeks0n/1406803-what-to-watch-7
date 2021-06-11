import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';

function MovieList(props) {
  const [, setActiveMovie] = useState({});

  const activeMovieHandler = (movie) => {
    setActiveMovie(movie);
  };

  return (
    <div className="catalog__films-list">
      {props.movies.map((movie) => <MovieCard key={movie.id} movie={movie} setActiveMovie={activeMovieHandler} />)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default MovieList;
