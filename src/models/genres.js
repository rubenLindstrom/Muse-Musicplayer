import blues from "../assets/images/categories/blues.jpg";
import christmas from "../assets/images/categories/christmas.jpg";
import classic from "../assets/images/categories/classic.jpg";
import country from "../assets/images/categories/country.jpg";
import edm from "../assets/images/categories/edm.jpg";
import jazz from "../assets/images/categories/jazz.jpg";
import pop from "../assets/images/categories/pop.jpg";
import punk from "../assets/images/categories/punk.jpg";
import reggae from "../assets/images/categories/reggae.jpg";
import rock from "../assets/images/categories/rock.jpg";

export const genres = {
  BLUES: "blues",
  COUNTRY: "country",
  EDM: "edm",
  JAZZ: "jazz",
  POP: "pop",
  REGGAE: "reggae",
  PUNK: "punk",
  ROCK: "rock",
  CHRISTMAS: "christmas",
  CLASSIC: "classic"
};

export default {
  [genres.BLUES]: {
    image: blues,
    title: "blues"
  },
  [genres.COUNTRY]: {
    image: country,
    title: "country"
  },
  [genres.EDM]: {
    image: edm,
    title: "edm"
  },
  [genres.JAZZ]: {
    image: jazz,
    title: "jazz"
  },
  [genres.POP]: {
    image: pop,
    title: "pop"
  },
  [genres.REGGAE]: {
    image: reggae,
    title: "reggae"
  },
  [genres.PUNK]: {
    image: punk,
    title: "punk"
  },
  [genres.ROCK]: {
    image: rock,
    title: "rock"
  },
  [genres.CHRISTMAS]: {
    image: christmas,
    title: "christmas"
  },
  [genres.CLASSIC]: {
    image: classic,
    title: "classic"
  }
};
