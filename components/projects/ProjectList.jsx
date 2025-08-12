import COUNTRIES from "@/src/assets/projects/countries.png";
import SHOPPING from "@/src/assets/projects/shopping.png";
import RESUME from "@/src/assets/projects/resume.png";
import RZEN from "@/src/assets/projects/rzen.png";
import SUPPLIES from "@/src/assets/projects/supply.png";
import EXPENSES from "@/src/assets/projects/expenses.png";

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
    title: "Mock Daily Expenses - 2025",
    description: "A simple app that helps to keep track of daily expenses supporting actions like exporting to CSV and clearing the list.",
    // image: "tetris-game.png",
    image: EXPENSES,
    link: "https://mock-daily-expense-tracker.vercel.app/",
  },
  {
    id: 5,
    title: "Mock Supply Dashboard - 2025",
    description:
      "A sample app created to experiment Tailwind CSS. This dashboard is dynamically built to allow the user to keep track of stock for many containers across multiple categories.",
    // image: "weather-app.png",
    image: SUPPLIES,
    link: "https://mock-supply-dashboard.vercel.app/",
  },
  {
    id: 6,
    title: "Smart Shopping List - 2025",
    description:
      "This app was created to display simple, yet effective track record of shopping supplies, giving suggestions on recently bought items as well as displaying a list of items recently bought.",
    // image: "weather-app.png",
    image: SHOPPING,
    link: "https://smart-shopping-list-seven.vercel.app/",
  },
];
