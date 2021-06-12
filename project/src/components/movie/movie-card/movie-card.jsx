import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';

function MovieCard(props) {
  const {movie, setActiveMovie} = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveMovie(movie)}
      onMouseLeave={() => setActiveMovie({})}
    >
      <div className="small-film-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`} movies={[movie]}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  movie: movieProp,
  setActiveMovie: PropTypes.func.isRequired,
};

export default MovieCard;
