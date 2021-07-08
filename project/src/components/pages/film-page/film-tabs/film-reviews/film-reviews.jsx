import React from 'react';
import {getHumanDate, getMachineDate} from '../../../../../utils/date';
import PropTypes from 'prop-types';
import commentProp from '../../../../../utils/comment.prop';
import LoadingScreen from '../../../../UI/loading-screen/loading-screen';

const COLUMN_COUNT = 2;

function FilmReviews({comments, isCommentsLoaded}) {
  if (!isCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const commentsElements = comments
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
        {commentsElements.slice(0, middleReviewElementIndex)}
      </div>
      <div className="film-card__reviews-col">
        {commentsElements.slice(middleReviewElementIndex)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
};

export default FilmReviews;
