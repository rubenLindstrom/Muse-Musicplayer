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
    title: "Blues"
  },
  [genres.COUNTRY]: {
    image: country,
    title: "Country"
  },
  [genres.EDM]: {
    image: edm,
    title: "EDM"
  },
  [genres.JAZZ]: {
    image: jazz,
    title: "Jazz"
  },
  [genres.POP]: {
    image: pop,
    title: "Pop"
  },
  [genres.REGGAE]: {
    image: reggae,
    title: "Reggae"
  },
  [genres.PUNK]: {
    image: punk,
    title: "Punk"
  },
  [genres.ROCK]: {
    image: rock,
    title: "Rock"
  },
  [genres.CHRISTMAS]: {
    image: christmas,
    title: "Christmas"
  },
  [genres.CLASSIC]: {
    image: classic,
    title: "Classic"
  }
};
