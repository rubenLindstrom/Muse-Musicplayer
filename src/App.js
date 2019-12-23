import React from "react";
import "./App.css";

import Nav from "./components/nav";
import TrackList from "./components/trackList";
import PlayerControls from "./components/playerControls";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Nav />
      <div id="container">
        <TrackList />
      </div>
      <PlayerControls />
    </MusicPlayerProvider>
  );
}

export default App;
