import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useInput from '../../../../hooks/use-input';
import {addComment} from '../../../../store/api-actions';
import PropTypes from 'prop-types';
import {resetServerResponseAddCommentError} from '../../../../store/comments/action';
import {getServerResponseAddCommentError, getHasServerResponseAddCommentError, getIsWaitingServerResponseAddComment} from '../../../../store/comments/selectors';

const STARS_COUNT = 10;
const CommentValidity = {
  MINIMUM_LETTERS: 50,
  MAXIMUM_LETTERS: 400,
};
const validateComment = (text) => text.length >= CommentValidity.MINIMUM_LETTERS && text.length <= CommentValidity.MAXIMUM_LETTERS;

function ReviewForm({movieId}) {
  const hasServerResponseAddCommentError = useSelector(getHasServerResponseAddCommentError);
  const serverResponseAddCommentError = useSelector(getServerResponseAddCommentError);
  const isWaitingServerResponseAddComment = useSelector(getIsWaitingServerResponseAddComment);

  const dispatch = useDispatch();

  const onSubmit = (id, formData) => {
    dispatch(addComment(id, formData));
  };

  const {
    value: enteredRating,
    hasError: ratingInputHasError,
    isTouched: isRatingTouched,
    valueChangeHandler: ratingChangedHandler,
  } = useInput();
  const {
    value: enteredComment,
    hasError: commentInputHasError,
    valueChangeHandler: commentChangedHandler,
  } = useInput(validateComment);

  useEffect(() => () => dispatch(resetServerResponseAddCommentError()), [dispatch]);

  const isFormInvalid = ratingInputHasError || commentInputHasError || !isRatingTouched;

  const inputs = [...Array(STARS_COUNT)].map((_, index) => {
    const id = STARS_COUNT - index;

    return (
      <Fragment key={id}>
        <input
          id={`star-${id}}`}
          className="rating__input"
          type="radio"
          name="rating"
          value={id}
          onChange={ratingChangedHandler}
        />
        <label
          className="rating__label"
          htmlFor={`star-${id}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isFormInvalid) {
      onSubmit(movieId, {
        rating: enteredRating,
        comment: enteredComment,
      });
    }
  };

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      {hasServerResponseAddCommentError && <p style={{textAlign: 'center'}}>{serverResponseAddCommentError}</p>}
      <fieldset disabled={isWaitingServerResponseAddComment} style={{border: 0}}>
        <div className="rating">
          <div className="rating__stars">
            {inputs}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={commentChangedHandler}
            value={enteredComment}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              disabled={isFormInvalid}
              className="add-review__btn"
              type="submit"
            >Post
            </button>
          </div>

        </div>
      </fieldset>
    </form>
  );
}

ReviewForm.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default ReviewForm;
