import React from "react";
import styled from "styled-components";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home";
import Genre from "./pages/genre";

import Header from "./components/organisms/header";
import PlayerControls from "./components/organisms/playerControls";
import Nav from "./components/organisms/nav";

import routes from "./constants/routes";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

function App() {
  return (
    <MusicPlayerProvider>
      <Header />
      <div id="container">
        <Router>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.genre} exact component={Genre} />
          </Switch>
          <BottomWrapper>
            <PlayerControls />
            <Nav />
          </BottomWrapper>
        </Router>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
