import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);
  const { currentTrackIndex, tracks, isPlaying } = state;

  // Play a specific track
  const playTrack = index => {
    if (index === currentTrackIndex) togglePlay();
    else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(tracks[index].file);
      state.audioPlayer.play();
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true
      }));
    }
  };

  // Play the previous track
  const playPreviousTrack = () => {
    // TODO: easier way to do this?
    const newIndex =
      (((currentTrackIndex - 1) % tracks.length) + tracks.length) %
      tracks.length;
    playTrack(newIndex);
  };

  const playNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(newIndex);
  };

  const togglePlay = () => {
    if (isPlaying) state.audioPlayer.pause();
    else state.audioPlayer.play();

    setState(state => ({ ...state, isPlaying: !isPlaying }));
  };
  const currentTrackName =
    currentTrackIndex !== null && tracks[currentTrackIndex].name;

  return {
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    playTrack,
    currentTrackName,
    trackList: tracks,
    isPlaying
  };
};

export default useMusicPlayer;
