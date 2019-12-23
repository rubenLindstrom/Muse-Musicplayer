import React, { useState } from "react";

import littleidea from "../assets/audio/littleidea.mp3";
import memories from "../assets/audio/memories.mp3";
import ukulele from "../assets/audio/ukulele.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const initialState = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Benjamin Tissot - Little Idea",
      file: littleidea
    },
    {
      name: "Benjamin Tissot - Memories",
      file: memories
    },
    {
      name: "Benjamin Tissot - Ukulele",
      file: ukulele
    }
  ],
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
