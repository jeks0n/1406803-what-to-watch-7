import React from 'react';
import movieProp from '../../../../../utils/movie.prop';

const MOVIE_GRADES = [
  ['Bad', [0, 3]],
  ['Normal', [3, 5]],
  ['Good', [5, 8]],
  ['Very good', [8, 10]],
  ['Awesome', [10, Infinity]],
];

function FilmOverview({movie}) {
  const {
    description,
    director,
    actors,
    rating,
    scoresCount,
  } = movie;
  const actorsText = actors.join(', ');
  const ratingText = rating.toFixed(1);
  const [movieLevel] = MOVIE_GRADES.find(([, grade]) => (rating >= grade[0] && rating < grade[1]));

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ratingText}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{movieLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {actorsText}</strong>
        </p>
      </div>
    </>
  );
}

FilmOverview.propTypes = {
  movie: movieProp,
};

export default FilmOverview;
