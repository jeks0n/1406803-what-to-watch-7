import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import VideoPlayer from '../../UI/video-player/video-player';
import {APP_ROUTE_CREATOR} from '../../../const';

const PLAY_MOVIE_DELAY = 1000;

function MovieCard(props) {
  const {movie, isActiveMovie, onActiveMovieChange} = props;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timeout;
    if (isActiveMovie) {
      timeout = setTimeout(() => setIsPlaying(true), PLAY_MOVIE_DELAY);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsPlaying(false);
    };
  }, [isActiveMovie]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onActiveMovieChange(movie)}
      onMouseLeave={() => onActiveMovieChange({})}
    >
      <div className="small-film-card__image">
        {isPlaying
          ? <VideoPlayer src={movie.previewVideoLink} isMuted isPlaying />
          : <img src={movie.previewImage} alt={movie.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APP_ROUTE_CREATOR.getFilm(movie.id)}`}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  movie: movieProp,
  isActiveMovie: PropTypes.bool,
  onActiveMovieChange: PropTypes.func.isRequired,
};

export default MovieCard;
