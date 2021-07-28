import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppRouteCreator} from '../../../const';
import {fetchCurrentMovie} from '../../../store/api-actions';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {resetCurrentMovie} from '../../../store/movies/action';
import {resetCurrentMovieComments} from '../../../store/comments/action';
import {getCurrentMovie, getIsCurrentMovieLoaded} from '../../../store/movies/selectors';
import VideoPlayer from '../../UI/video-player/video-player';
import PlayerControls from './player-controls/player-controls';

function PlayerPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fullScreenButtonClickCount, setFullScreenButtonClickCount] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [totalVideoTime, setTotalVideoTime] = useState(0);
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

  const handleCurrentVideoTimeChanged = (time) => setCurrentVideoTime(time);
  const handleTotalVideoTimeChanged = (time) => setTotalVideoTime(time);
  const handlePlayingControlButtonClick = () => setIsPlaying((prevState) => !prevState);
  const handleFullScreenButtonClick = () => setFullScreenButtonClickCount((prevState) => ++prevState);

  return (
    <div className="player">
      <VideoPlayer
        src={currentMovie.videoLink}
        isPlaying={isPlaying}
        isShowLoading
        fullScreenButtonClickCount={fullScreenButtonClickCount}
        onCurrentVideoTimeChanged={handleCurrentVideoTimeChanged}
        onTotalVideoTimeChanged={handleTotalVideoTimeChanged}
      />

      <button type="button" className="player__exit" onClick={() => {
        if (history.action !== 'POP') {
          return history.goBack();
        }

        history.push(AppRouteCreator.getMain());
      }}
      >Exit
      </button>

      <PlayerControls
        isPlaying={isPlaying}
        onPlayingControlButtonClick={handlePlayingControlButtonClick}
        onFullScreenButtonClick={handleFullScreenButtonClick}
        currentVideoTime={currentVideoTime}
        totalVideoTime={totalVideoTime}
      />
    </div>
  );
}

export default PlayerPage;
