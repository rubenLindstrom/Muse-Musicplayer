import React from "react";
import styled from "styled-components";

import useMusicPlayer from "../hooks/useMusicPlayer";

import TrackList from "../components/organisms/trackList";
import { PageTitle } from "../components/atoms";

const Banner = styled.div`
  background: url(${props => props.bg}) center no-repeat;
  background-size: cover;
  text-align: center;
  align-items: center;
  padding: 2rem 0;
  margin-top: -2rem;
  margin-bottom: 2rem;
  color: #fff;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Genre = props => {
  const genre = props.match.params.genre;
  const { genreMapper } = useMusicPlayer();
  const genreData = genreMapper(genre);
  const { image, title } = genreData;

  return (
    <Wrapper>
      <Banner bg={image} className="fullwidth">
        <PageTitle>{title}</PageTitle>
      </Banner>
      <TrackList genre={genre} />
    </Wrapper>
  );
};

export default Genre;
