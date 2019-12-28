import React from "react";
import styled from "styled-components";

import TrackList from "../components/organisms/trackList";
import { PageTitle } from "../components/atoms";

const Banner = styled.div`
  background: url(${props => props.bg}) center cover no-repeat;
`;

const Genre = props => {
  const genre = props.match.params.genre;

  return (
    <>
      <Banner bg={props.bg}>
        <PageTitle>{genre}</PageTitle>
      </Banner>
      <TrackList genre={genre} />
    </>
  );
};

export default Genre;
