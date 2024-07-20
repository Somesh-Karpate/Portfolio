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
  Cpp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "MERN stack Developer",
    icon: mobile,
  },
  {
    title: "C++",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: Cpp,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Preparo Analytics",
    icon: web,
    iconBg: "#383E56",
    date: "November 2023 - April 2024",
    points: [
      "Architected and developed a Student Admission Management System for college using Django, automating student info management processes and course registration; system increased efficiency, reducing administrative workload by 30%.",
"Led the implementation of a student data management system, streamlining profile organization processes and showcasing student talents, resulting in a 40% increase in scholarship applications and 25% higher student engagement rates.",
	"Executed a comprehensive student data organization overhaul, leading to a 50% decrease in data retrieval time and a 30% improvement in cross-functional communication and collaboration."
,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Learning Platform",
    description:
      "I developed a comprehensive online learning platform designed to facilitate seamless and effective learning experiences for students. This project involved the creation of key components including a dynamic landing page, user-friendly login and sign-up functionalities, and an intuitive student dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "grey-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/Somesh-Karpate/MindSpring.git",
  },
  {
    name: "Admission Management System",
    description:
   " Built a Django-based Student Admission Management System, boosting efficiency by 30%. Implemented a student data system, increasing scholarship applications by 40% and engagement by 25%. Overhauled data organization, cutting retrieval time by 50% and improving communication by 30%.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/Somesh-Karpate/Admission-Management-System",
  },
  {
    name: "Maze Navigator",
    description:
      "Maze Navigator is a fun and engaging maze-solving adventure where you guide your player ('P') through a maze to reach the goal ('G'). The challenge? Navigate through twists and turns while avoiding obstacles ('X') strategically placed throughout the maze. Use simple controls ('w', 'a', 's', 'd') to maneuver your way to victory, testing your skills in maze navigation.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/Somesh-Karpate/Maze_Navigator",
  },
  {
    name: "Food Ordering System",
    description:
      "Developed a food delivery application using the MERN stack (MongoDB, Express.js, React, Node.js). The application features user authentication, real-time order tracking, restaurant listings, and a seamless payment gateway. It provides an intuitive user interface and efficient backend to ensure a smooth and reliable food ordering experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "grey-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/Somesh-Karpate/FoodDash",
  },
];

export { services, technologies, experiences, testimonials, projects };
