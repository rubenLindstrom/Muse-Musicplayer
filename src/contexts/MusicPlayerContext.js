import React, { useState } from "react";

import tracks from "../models/tracks";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const initialState = {
  audioPlayer: new Audio(),
  tracks,
  currentTrackIndex: null,
  isPlaying: false
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
