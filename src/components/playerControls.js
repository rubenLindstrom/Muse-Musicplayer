import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import useMusicPlayer from "../hooks/useMusicPlayer";

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack
  } = useMusicPlayer();

  return (
    <div>
      <div>
        <marquee>{currentTrackName}</marquee>
      </div>
      <div>
        <Button onClick={playPreviousTrack} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={faStepBackward} />
        </Button>
        <Button onClick={togglePlay} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </Button>
        <Button onClick={playNextTrack} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={faStepForward} />
        </Button>
      </div>
    </div>
  );
};

export default Controls;
