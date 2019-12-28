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
  },
  [uuid()]: {
    artist: "Lobo Loco",
    title: "Traveling to Lousiana - Soft Delay",
    album: "Adventure",
    genres: [BLUES, COUNTRY],
    track: require("../assets/audio/traveling to lousiana.mp3")
  },
  [uuid()]: {
    artist: "Punk Rock Opera",
    title: "1945",
    album: "Punk Rock Opera, Vol.II",
    genres: [BLUES, ROCK, PUNK],
    track: require("../assets/audio/Punk_Rock_Opera_-_14_-_1945.mp3")
  },
  [uuid()]: {
    artist: "Nathaniel Wyvern",
    title: "Distant Stars - 01 Total Eclipse",
    album: "2019 collection",
    genres: [EDM],
    track: require("../assets/audio/Nathaniel_Wyvern_-_01_-_Total_Eclipse.mp3")
  },
  [uuid()]: {
    artist: "Computer Music All-stars",
    title: "Energy Fix",
    album: "—",
    genres: [EDM],
    track: require("../assets/audio/Computer_Music_All-stars_-_Energy_Fix.mp3")
  },
  [uuid()]: {
    artist: "Metre",
    title: "Sand Dweller",
    album: "Motif",
    genres: [EDM],
    track: require("../assets/audio/Metre_-_03_-_Sand_Dweller.mp3")
  },
  [uuid()]: {
    artist: "Soularflair",
    title: "Dark-Minimal-Pumping",
    album: "CUES for film, TV, games, etc (DARK)",
    genres: [EDM],
    track: require("../assets/audio/Soularflair_-_12_-_Cue_3_-_Dark-Minimal-Pumping_Digital_Soul.mp3")
  },
  [uuid()]: {
    artist: "Uncan",
    title: "Ocean Hotel",
    album: "Third",
    genres: [EDM],
    track: require("../assets/audio/Uncan_-_08_-_Ocean_Hotel.mp3")
  },
  [uuid()]: {
    artist: "Scott Holmes",
    title: "Upbeat Party",
    album: "Inspiring & Upbeat Music",
    genres: [POP],
    track: require("../assets/audio/Scott_Holmes_-_04_-_Upbeat_Party.mp3")
  },
  [uuid()]: {
    artist: "Checkie Brown",
    title: "Jeanny (CB 35)",
    album: "hey",
    genres: [POP],
    track: require("../assets/audio/Checkie_Brown_-_04_-_Jeanny_CB_35.mp3")
  },
  [uuid()]: {
    artist: "Derek Clegg",
    title: "I'll Almost Get Us There",
    album: "Solar",
    genres: [POP],
    track: require("../assets/audio/Derek_Clegg_-_07_-_Ill_Almost_Get_Us_There.mp3")
  },
  [uuid()]: {
    artist: "Silva de Alegria",
    title: "Antiguas Melodías",
    album: "Primavera en la Guerra del Sonido",
    genres: [POP],
    track: require("../assets/audio/Silva_de_Alegria_-_08_-_Antiguas_Melodas.mp3")
  },
  [uuid()]: {
    artist: "KieLoKaz",
    title: "Wow",
    album: "Free Ganymed",
    genres: [JAZZ],
    track: require("../assets/audio/KieLoKaz_-_03_-_Wow_Kielokaz_ID_359.mp3")
  },
  [uuid()]: {
    artist: "Checkie Brown",
    title: "Wirklich Wichtig",
    album: "hey",
    genres: [JAZZ],
    track: require("../assets/audio/Checkie_Brown_-_11_-_Wirklich_Wichtig_CB_27.mp3")
  },
  [uuid()]: {
    artist: "Unheard Music Concepts",
    title: "Rain",
    album: "The Lasso of Time",
    genres: [JAZZ],
    track: require("../assets/audio/17_-_Rain.mp3")
  },
  [uuid()]: {
    artist: "Spectacular Sound Productions",
    title: "Breathing",
    album: "Breathing",
    genres: [CLASSIC],
    track: require("../assets/audio/spectacular_-_01_-_Breathing.mp3")
  },
  [uuid()]: {
    artist: "sawsquarenoise",
    title: "Tsuneni",
    album: "—",
    genres: [CLASSIC],
    track: require("../assets/audio/sawsquarenoise_-_Tsuneni.mp3")
  },
  [uuid()]: {
    artist: "David Hilowitz",
    title: "Equilibrium I (Cello version)",
    album: "Equilibrium I (Cello version)",
    genres: [CLASSIC],
    track: require("../assets/audio/David_Hilowitz_-_Equilibrium_I_Cello_version.mp3")
  },
  [uuid()]: {
    artist: "Peculate",
    title: "Vale of Tears",
    album: "There are no angels",
    genres: [ROCK],
    track: require("../assets/audio/Peculate_-_07_-_Vale_of_Tears.mp3")
  },
  [uuid()]: {
    artist: "XTaKeRuX",
    title: "Free will possession",
    album: "XTaKeRuX",
    genres: [ROCK],
    track: require("../assets/audio/XTaKeRuX_-_01_-_Free_will_possession.mp3")
  },
  [uuid()]: {
    artist: "Die Leere im Kern Deiner Hoffnung",
    title: "Zwei einsame Seelen",
    album: "Freiheit Aushalten",
    genres: [ROCK],
    track: require("../assets/audio/Die_Leere_im_Kern_Deiner_Hoffnung_-_06_-_Zwei_einsame_Seelen.mp3")
  },
  [uuid()]: {
    artist: "Lobo Loco",
    title: "Dirty Old Frogg",
    album: "NIce Nowhere",
    genres: [COUNTRY],
    track: require("../assets/audio/Lobo_Loco_-_12_-_Dirty_Old_Frogg_ID_359.mp3")
  },
  [uuid()]: {
    artist: "Quimorucru",
    title: "Salut John",
    album: "Un méchant party",
    genres: [COUNTRY],
    track: require("../assets/audio/Quimorucru_-_20_-_Salut_John.mp3")
  }
  // TEMPLATE
  // [uuid()]: {
  //   artist:
  //   title:
  //   album:
  //   genres: [],
  //   track: require("../assets/audio/")
  // },
};
