import React from "react";

import useMusicPlayer from "../hooks/useMusicPlayer";

import TrackList from "../components/organisms/trackList";
import { PageTitle } from "../components/atoms";

const Genre = props => {
  const genre = props.match.params.genre;

  return (
    <>
      <PageTitle>{genre}</PageTitle>
      <TrackList genre={genre} />
    </>
  );
};

export default Genre;
