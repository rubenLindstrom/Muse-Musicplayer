import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);
  const {
    currentTrack,
    tracks,
    isPlaying,
    genreData,
    genres,
    queue,
    currentTrackIndex
  } = state;

  const tracksByGenre = {};
  Object.keys(genres).forEach(key => {
    tracksByGenre[genres[key]] = {};
  });

  // Linear complexity, caching
  Object.keys(tracks).forEach(key => {
    tracks[key].genres.forEach(genre => {
      tracksByGenre[genre][key] = tracks[key];
    });
  });

  const genreMapper = genre => genreData[genre];
  const trackMapper = genre => tracksByGenre[genre];

  // Play a specific track
  const playTrack = (id, index) => {
    if (id === currentTrack) togglePlay();
    else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(tracks[id].track);
      state.audioPlayer.play();
      setState(state => ({
        ...state,
        currentTrack: id,
        isPlaying: true,
        currentTrackIndex: index
      }));
    }
  };

  const setQueue = (index, genre) => {
    setState(state => ({
      ...state,
      queue: Object.keys(trackMapper(genre)),
      currentTrackIndex: index
    }));
  };

  // Play the previous track
  const playPreviousTrack = () => {
    const newIndex =
      (((currentTrackIndex - 1) % queue.length) + queue.length) % queue.length;
    console.log(newIndex);
    console.log(queue);

    playTrack(queue[newIndex], newIndex);
  };

  const playNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % queue.length;
    playTrack(queue[newIndex], newIndex);
  };

  const queueSong = id => {
    const newQueue = [...queue];
    newQueue.splice(currentTrackIndex + 1, 0, id);
    setState(state => ({
      ...state,
      queue: newQueue
    }));
  };

  const togglePlay = () => {
    if (isPlaying) state.audioPlayer.pause();
    else state.audioPlayer.play();

    setState(state => ({ ...state, isPlaying: !isPlaying }));
  };
  const currentTrackName =
    currentTrackIndex !== null && tracks[currentTrack].title;

  return {
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    playTrack,
    currentTrack,
    currentTrackName,
    trackList: tracks,
    isPlaying,
    genreMapper,
    trackMapper,
    genres,
    genreData,
    setQueue
  };
};

export default useMusicPlayer;
