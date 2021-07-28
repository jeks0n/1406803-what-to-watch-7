import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';

function VideoPlayer(props) {
  const {
    src,
    isMuted,
    isPlaying,
    isShowLoading,
    fullScreenButtonClickCount = 0,
    onCurrentVideoTimeChanged =  () => {},
    onTotalVideoTimeChanged =  () => {},
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.onloadeddata = () => setIsLoading(false);
    videoRef.current.ontimeupdate = () => {
      if (videoRef.current) {
        onCurrentVideoTimeChanged(videoRef.current.currentTime);
      }
    };
  }, [src, onCurrentVideoTimeChanged]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsLoading(false);
        onTotalVideoTimeChanged(videoRef.current.duration);
      };
    }
  }, [src, onTotalVideoTimeChanged]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (fullScreenButtonClickCount > 0) {
      videoRef.current.requestFullscreen();
    }
  }, [fullScreenButtonClickCount]);


  return (
    <>
      {(isLoading && isShowLoading) && <LoadingScreen isAbsolutePosition />}
      <video
        src={src}
        className="player__video"
        poster="img/player-poster.jpg"
        autoPlay="autoplay"
        muted={isMuted}
        ref={videoRef}
      >
      </video>
    </>
  );
}

VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  isShowLoading: PropTypes.bool,
  fullScreenButtonClickCount: PropTypes.number,
  onCurrentVideoTimeChanged: PropTypes.func,
  onTotalVideoTimeChanged: PropTypes.func,
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
