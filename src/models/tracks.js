import { genres } from "./genres";
import uuid from "react-uuid";

const {
  BLUES,
  COUNTRY,
  EDM,
  JAZZ,
  POP,
  REGGAE,
  PUNK,
  ROCK,
  CHIRSTMAS,
  CLASSIC
} = genres;

export default {
  [uuid()]: {
    artist: "Checkie Brown",
    title: "Mary Roose",
    album: "hey",
    genres: [BLUES],
    track: require("../assets/audio/mary roose.mp3")
  },
  [uuid()]: {
    artist: "Lobo Loco",
    title: "Brain",
    album: "Not My Brain",
    genres: [BLUES, COUNTRY],
    track: require("../assets/audio/brain.mp3")
  }
};
