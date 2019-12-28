import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../../hooks/useMusicPlayer";

const StyledTrack = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #333;
  transition: all 0.2s linear;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;

  span {
    display: flex;
  }

  span:first-child {
    flex-direction: column;

    p {
      margin: 0;

      &.title {
        font-size: 1.4rem;
      }

      &.artist {
        color: #444;
      }
    }
  }

  span:first-child + span {
    justify-content: flex-end;
    align-items: center;
    .icon {
      font-size: 1.8rem;
      color: var(--main);
      margin: 0 0.5rem;
    }
  }

  &.isOn {
    border-color: var(--main);
    background-color: #333;
    color: #fff;
    span:first-child p.artist {
      color: #fff;
    }
  }
`;

const Track = props => {
  const { track, genre, index, id } = props;
  const { currentTrack, playTrack, isPlaying, setQueue } = useMusicPlayer();

  const { title, artist } = track;
  const isOn = currentTrack === id;

  return (
    <StyledTrack className={isOn ? "isOn" : ""}>
      <span>
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
      </span>
      <span>
        <FontAwesomeIcon
          className={`icon ${isOn ? "pause" : "play"}`}
          onClick={() => {
            playTrack(id);
            setQueue(index, genre);
          }}
          icon={isOn && isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="icon" icon={faEllipsisV} />
      </span>
    </StyledTrack>
  );
};

const TrackList = ({ genre }) => {
  const { trackMapper } = useMusicPlayer();
  const tracks = trackMapper(genre);
  console.log(tracks);

  return (
    <div>
      {Object.keys(tracks).map((key, index) => {
        const track = tracks[key];
        return (
          <Track key={key} track={track} genre={genre} index={index} id={key} />
        );
      })}
    </div>
  );
};

export default TrackList;
