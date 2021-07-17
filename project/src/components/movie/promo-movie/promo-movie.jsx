import React from 'react';
import PlayButton from '../../UI/play-button/play-button';
import MyListButton from '../../UI/my-list-button/my-list-button';
import movieProp from '../../../utils/movie.prop';

function PromoMovie(props) {
  const {movie} = props;
  const {
    name,
    genre,
    posterImage,
    released,
    backgroundImage,
  } = movie;

  return (
    <>
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton movie={movie}/>
              <MyListButton movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PromoMovie.propTypes = {
  movie: movieProp.isRequired,
};

export default PromoMovie;
