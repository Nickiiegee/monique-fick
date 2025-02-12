import COUNTRIES from "@/src/assets/projects/countries.png";
import ITUNES from "@/src/assets/projects/itunes.png";
import RESUME from "@/src/assets/projects/resume.png";
import RZEN from "@/src/assets/projects/rzen.png";
import TETRIS from "@/src/assets/projects/tetris.png";

export const ProjectList = [
  {
    id: 1,
    title: "My Resume - 2025",
    description:
      "A simple resume built with HTML/CSS, React and NextJS. This was a project I did to practice my skills in front-end development.",
    image: RESUME,
    link: "https://moniquefick.github.io/monique-fick-cv/",
  },
  {
    id: 2,
    title: "Resource Zen - 2024",
    description:
      "A resource management tool developed with my company, focusing on simplifying project and team coordination.",
    image: RZEN,
    link: "https://www.resourcezen.co.za/",
  },
  {
    id: 3,
    title: "Country App 2024",
    description:
      "A simple app that displays a list of countries which you can filter and keep state when you switch between screens. This was a project I did to familiarise myself with react-native.",
    // image: "country-app.png",
    image: COUNTRIES,
    link: "https://github.com/Nickiiegee/CountryApp",
  },
  {
    id: 4,
    title: "Tetris Game - 2020",
    description:
      "A simple Tetris game built with JavaScript and HTML/CSS. This was my first programming project when I just started out.",
    // image: "tetris-game.png",
    image: TETRIS,
    link: "https://github.com/Nickiiegee/React-TetrisGame",
  },
  {
    id: 5,
    title: "iTunes Search - 2020",
    description:
      "My first simple search engine for searching songs on iTunes. You are able to add or remove songs to your favourites list.",
    // image: "weather-app.png",
    image: ITUNES,
    link: "https://github.com/Nickiiegee/react-iTunes-search",
  },
];
