import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import useMusicPlayer from "../../hooks/useMusicPlayer";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0;
  background-color: #555;
`;

const Controls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack
  } = useMusicPlayer();

  return (
    <Wrapper>
      <div>
        <marquee>{currentTrackName}</marquee>
      </div>
      <span>
        <Button onClick={playPreviousTrack} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={faStepBackward} />
        </Button>
        <Button onClick={togglePlay} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </Button>
        <Button onClick={playNextTrack} disabled={!currentTrackName}>
          <FontAwesomeIcon icon={faStepForward} />
        </Button>
      </span>
    </Wrapper>
  );
};

export default Controls;
