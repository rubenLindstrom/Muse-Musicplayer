import React, { useState } from "react";

import genreData, { genres } from "../models/genres";
import tracks from "../models/tracks";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const initialState = {
  audioPlayer: new Audio(),
  tracks,
  currentTrack: null,
  isPlaying: false,
  genreData,
  genres,
  queue: [],
  currentTrackIndex: null
};

const MusicPlayerProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
