import React from 'react';
import generateComments from '../../../../../mocks/comments';
import movieProp from '../../../../../utils/movie.prop';
import {getHumanDate, getMachineDate} from '../../../../../utils/date';

const COMMENT_COUNT = 7;
const COLUMN_COUNT = 2;

function FilmReviews({movie}) {
  const {movieId} = movie;
  const comments = generateComments(COMMENT_COUNT, movieId)
    .sort((comment) => comment.date.getTime() - comment.date.getTime())
    .map(({id, user, rating, date, comment}) => (
      <div key={id} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={getMachineDate(date)}>{getHumanDate(date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    ));
  const middleReviewElementIndex = Math.round(comments.length / COLUMN_COUNT);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, middleReviewElementIndex)}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(middleReviewElementIndex)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  movie: movieProp,
};

export default FilmReviews;
