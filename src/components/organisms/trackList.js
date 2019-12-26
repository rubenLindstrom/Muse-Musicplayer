import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../../hooks/useMusicPlayer";

const TrackList = ({ genre }) => {
  const {
    currentTrackName,
    playTrack,
    isPlaying,
    trackMapper
  } = useMusicPlayer();
  const tracks = trackMapper(genre);

  return (
    <div>
      {tracks.map((track, index) => (
        <div className="box" key={track.title}>
          <button className="button" onClick={() => playTrack(index)}>
            <FontAwesomeIcon
              icon={
                currentTrackName === track.title && isPlaying ? faPause : faPlay
              }
            />
          </button>
          <div className="song-title">{track.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
