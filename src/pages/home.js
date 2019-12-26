import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageTitle } from "../components/atoms";

import genres from "../constants/genres";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 -2rem;
  grid-gap: 1px;
`;

const GridItem = styled.div`
  background: url(${props => props.bg}) center no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    /* background-color: rgba(210, 210, 210, 0.5); */
  }
`;

const home = () => {
  return (
    <>
      <PageTitle>home</PageTitle>
      <Grid>
        {Object.keys(genres).map(key => {
          const { title, image } = genres[key];
          return (
            <Link to={`/${title}`} key={title}>
              <GridItem bg={image}>
                <h2>{title}</h2>
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default home;
