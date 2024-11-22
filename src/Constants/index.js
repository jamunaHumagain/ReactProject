import css from "../assets/Css.jpg";
import tailwind from "../assets/tailwind.jpg";
import html from "../assets/html.jpg";
import reactjs from "../assets/reactjs.jpg";
import javascript from "../assets/javascript.jpg";
import web from "../assets/web.jpg";
import typescript from "../assets/typescript.jpg";
import ux from "../assets/ux.jpg";
import reacr from "../assets/reacr.jpg";
import git from "../assets/git.jpg";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import android from "../assets/android.jpg";
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reacr,
  },
  {
    title: "UI/UX Designer",
    icon: ux,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "android",
    icon: android,
  },
];

const projects = [
  {
    name: "Free Hold",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pro1,
  },
  {
    name: "Todo App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pro3,
  },
  {
    name: "E-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: pro2,
  },
];
export { services, technologies, projects };
