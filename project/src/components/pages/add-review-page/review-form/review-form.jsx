import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import useInput from '../../../../hooks/use-input';
import {addComment} from '../../../../store/api-actions';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../../../store/action';

const STARS_COUNT = 10;
const CommentValidity = {
  MINIMUM_LETTERS: 50,
  MAXIMUM_LETTERS: 400,
};

function ReviewForm(props) {
  const {
    movieId,
    onSubmit,
    resetServerResponseAddCommentError,
    hasServerResponseAddCommentError,
    serverResponseAddCommentError,
    isWaitingServerResponseAddComment,
  } = props;

  const validateComment = (text) => text.length >= CommentValidity.MINIMUM_LETTERS && text.length <= CommentValidity.MAXIMUM_LETTERS;

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

  useEffect(() => resetServerResponseAddCommentError, [resetServerResponseAddCommentError]);

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
  onSubmit: PropTypes.func.isRequired,
  resetServerResponseAddCommentError: PropTypes.func.isRequired,
  hasServerResponseAddCommentError: PropTypes.bool.isRequired,
  serverResponseAddCommentError: PropTypes.string.isRequired,
  isWaitingServerResponseAddComment: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  hasServerResponseAddCommentError: state.hasServerResponseAddCommentError,
  serverResponseAddCommentError: state.serverResponseAddCommentError,
  isWaitingServerResponseAddComment: state.isWaitingServerResponseAddComment,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, formData) {
    dispatch(addComment(id, formData));
  },
  resetServerResponseAddCommentError() {
    dispatch(ActionCreator.resetServerResponseAddCommentError());
    dispatch(ActionCreator.resetHasServerResponseAddCommentError());
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
