import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import {AppRouteCreator} from '../../../const';
import {fetchCurrentMovie} from '../../../store/api-actions';
import {ActionCreator} from '../../../store/action';
import LoadingScreen from '../../UI/loading-screen/loading-screen';

function PlayerPage(props) {
  const params = useParams();

  const history = useHistory();
  const {
    getCurrentMovie,
    resetState,
    currentMovie,
    isCurrentMovieLoaded,
  } = props;

  useEffect(() => {
    resetState();
    getCurrentMovie(params.id);

    return resetState;
  }, [getCurrentMovie, resetState, params]);

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

PlayerPage.propTypes = {
  getCurrentMovie: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  currentMovie: movieProp.isRequired,
  isCurrentMovieLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentMovie(id) {
    dispatch(fetchCurrentMovie(id));
  },
  resetState() {
    dispatch(ActionCreator.resetCurrentMovie());
    dispatch(ActionCreator.resetIsCurrentMovieLoaded());
  },
});

export {PlayerPage};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
