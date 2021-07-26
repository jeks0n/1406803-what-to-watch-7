import React from 'react';
import {useDispatch} from 'react-redux';
import movieProp from '../../../utils/movie.prop';
import {changeMovieMyMovieListStatus} from '../../../store/api-actions';

function MyListButton({movie}) {
  const dispatch = useDispatch();

  const changeMyListStatus = (currentMovie) => dispatch(changeMovieMyMovieListStatus(currentMovie));

  const iconName = movie.isFavorite ? 'in-list' : 'add';

  return (
    <button
      onClick={() => changeMyListStatus(movie)}
      className="btn btn--list film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={`#${iconName}`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  movie: movieProp,
};

export default MyListButton;
