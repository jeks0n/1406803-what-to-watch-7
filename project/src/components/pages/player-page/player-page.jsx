import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppRouteCreator} from '../../../const';
import {fetchCurrentMovie} from '../../../store/api-actions';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {resetCurrentMovie} from '../../../store/movies/action';
import {resetCurrentMovieComments} from '../../../store/comments/action';
import {getCurrentMovie, getIsCurrentMovieLoaded} from '../../../store/movies/selectors';

function PlayerPage(props) {
  const currentMovie = useSelector(getCurrentMovie);
  const isCurrentMovieLoaded = useSelector(getIsCurrentMovieLoaded);

  const params = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const resetState = () => {
      dispatch(resetCurrentMovie());
      dispatch(resetCurrentMovieComments());
    };

    resetState();
    dispatch(fetchCurrentMovie(params.id));

    return resetState;
  }, [dispatch, params.id]);

  if (!isCurrentMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="player">
      <video src={currentMovie.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit" onClick={() => {
        if (history.action !== 'POP') {
          return history.goBack();
        }

        history.push(AppRouteCreator.getMain());
      }}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
