import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

const NavBar = styled.div`
  padding: 1rem 0.5rem;
  background-color: #333;
  height: 50px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: auto;
  height: 100%;
`;

const Logo = styled.img`
  display: inline-block;
  height: 100%;
  width: auto;
`;

const Title = styled.h1`
  color: #ffb921;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 300;
  margin-left: 1rem;
  font-size: 2.5em;
`;

const nav = () => (
  <NavBar>
    <Div>
      <Logo src={logo} />
      <Title>muse</Title>
    </Div>
  </NavBar>
);
export default nav;
