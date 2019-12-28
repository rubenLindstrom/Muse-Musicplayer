import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompactDisc } from "@fortawesome/free-solid-svg-icons";

import routes from "../../constants/routes";

const Wrapper = styled.div`
  height: 2.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #111;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
  &.active {
    color: var(--main);
  }
`;

const nav = () => {
  return (
    <Wrapper>
      <StyledLink exact to={routes.home}>
        <FontAwesomeIcon icon={faHome} />
      </StyledLink>
      <StyledLink to={routes.genres}>
        <FontAwesomeIcon icon={faCompactDisc} />
      </StyledLink>
    </Wrapper>
  );
};

export default nav;
