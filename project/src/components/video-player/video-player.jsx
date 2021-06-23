import React, {useRef} from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({src, isMuted}) {
  const videoRef = useRef();

  return (
    <video
      src={src}
      className="player__video"
      poster="img/player-poster.jpg"
      autoPlay="autoplay"
      muted={isMuted}
      ref={videoRef}
    >
    </video>
  );
}

VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
