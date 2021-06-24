import React from 'react';
import movieProp from '../../../../../utils/movie.prop';
import {getHumanDuration} from '../../../../../utils/date';

function FilmDetails({movie}) {
  const {
    actors,
    director,
    genre,
    released,
    runtime,
  } = movie;
  const actorsText = actors.map((actor, index, list) => {
    if (index !== list.length - 1) {
      return <span key={actor}>{`${actor},`} <br /></span>;
    }

    return <span key={actor}>{actor}</span>;
  });
  const runTime = getHumanDuration(runtime);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {actorsText}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

FilmDetails.propTypes = {
  movie: movieProp,
};

export default FilmDetails;
