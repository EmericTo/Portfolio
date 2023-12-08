import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  passwordgenerator,
  visualisation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Présenation",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Conception Web",
    icon: web,
  },
  {
    title: "Developpeur Web Fullstack",
    icon: mobile,
  },
  {
    title: "Gestion Manipulation de Données",
    icon: backend,
  },
  {
    title: "Developpeur IOT",
    icon: creator,
  },
];

const technologies = [
  /*{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Autodidacte",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2021 - Sep 2022",
    points: [
      "Apprentissage de html, css et javascript.",
      "Réalisation d'un premier petit site vitrine en html, css et javascript.",
      "Etude des concepts et protocoles (HTTP, HTTPS) .",
    ],
  },
  {
    title: "Formation e-learning développeur full stack",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2022 - Fev 2023",
    points: [
      "Apprentissage de PHP et du développement backend avec base de données.",
      "Apprentissage et implémentation d'API.",
      "Implémentation de designs responsives.",
      "Développement fullstack d'un site web e-commerce.",
    ],
  },
  {
    title: "Formation Concepteur Développeur d'Applications ",
    company_name: "Wild Code School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Sep 2024",
    points: [
      "Concevoir et développer des composants d'interface utilisateur (React, Nodejs, Typescript, méthode AGILE).",
      "Concevoir et développer une application multicouche répartie(Devops, Docker, Architecture monolithique et micro-services).",
      "Concevoir et développer la persistance des données(PostgresSQL, MongoDB, API Rest et GraphQl).",
      "Savoir vulgariser du code auprès d'une personne non technique et participer et contribuer à une communauté de développeurs.",
    ],
  },
  {
    title: "Alternant Développeur Web/Iot",
    company_name: "VMI",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023 - Sep 2024",
    points: [
      "Developper des applications web en javascript liées aux machines connectées et IHM.",
      "Traîtement et visualisation de données en python.",
      "Developpement de modèles prédictifs en python pour les données.",
      "Exploration et gestion de la partie data science.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Emeric m'a fait comprendre que l'impossible était possible.",
    name: "Ma Copine",
    designation: "CEO",
    company: "La maison",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré quelqu'un autant à l'écoute.",
    name: "Toujours Ma Copine",
    designation: "CEO",
    company: "La maison",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Très drôle mais viens étendre le linge maintenant",
    name: "Encore Ma Copine",
    designation: "CEO",
    company: "La maison",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Générateur de mots de passe",
    description:
      "Petite application web simple permettant de générer des mots de passe aléatoires robustes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: passwordgenerator,
    source_code_link: "https://github.com/EmericTo/Password-Generator/tree/main/PasswordGenerator",
  },
  {
    name: "App de visualisation de tri",
    description:
      "Application web qui permet de générer un tableau de données et d'effectuer un tri des données tout en visualisant en temps réel les donées être triées par l'algorythme.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      /*{
        name: "scss",
        color: "pink-text-gradient",
      },*/
    ],
    image: visualisation,
    source_code_link: "https://github.com/EmericTo/Sorting-Visualizer-React/tree/main/src",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };