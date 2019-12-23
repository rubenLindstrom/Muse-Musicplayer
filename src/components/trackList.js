import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../hooks/useMusicPlayer";

const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying
  } = useMusicPlayer();

  return (
    <div>
      {trackList.map((track, index) => (
        <div className="box" key={track.name}>
          <button className="button" onClick={() => playTrack(index)}>
            <FontAwesomeIcon
              icon={
                currentTrackName === track.name && isPlaying ? faPause : faPlay
              }
            />
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
