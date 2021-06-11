import React from 'react';
import {useHistory} from 'react-router-dom';
import movieProp from '../../../utils/movie.prop';
import appRoot from '../../../utils/app-root';

function Play(props) {
  const {movie} = props;

  const history = useHistory();

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => history.push({
        pathname: appRoot.getPlayer(movie.id),
        state: {movie},
      })}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

Play.propTypes = {
  movie: movieProp,
};

export default Play;
