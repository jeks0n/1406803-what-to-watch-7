import React from 'react';
import {getHumanDurationFromSeconds} from '../../../../utils/date';
import PropTypes from 'prop-types';

function PlayerControls(props) {
  const {
    isPlaying,
    onPlayingControlButtonClick,
    onFullScreenButtonClick,
    currentVideoTime,
    totalVideoTime,
  } = props;

  const progress = currentVideoTime / totalVideoTime ? currentVideoTime / totalVideoTime * 100 : 0;
  const progressPercent = `${progress}%`;
  const remainingDuration = totalVideoTime - currentVideoTime ? `-${getHumanDurationFromSeconds(totalVideoTime - currentVideoTime)}`
    : '00:00';

  const playingControlButton = !isPlaying ? (
    <button type="button" className="player__play" onClick={onPlayingControlButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
    </button>)
    :
    (
      <button type="button" className="player__play" onClick={onPlayingControlButtonClick}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>);

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progress} max="100"></progress>
          <div className="player__toggler" style={{left: progressPercent}}>Toggler</div>
        </div>
        <div className="player__time-value">{remainingDuration}</div>
      </div>

      <div className="player__controls-row">
        {playingControlButton}
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick} >
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
}

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayingControlButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  currentVideoTime: PropTypes.number,
  totalVideoTime: PropTypes.number,
};

export default PlayerControls;
