import reactlogo from "../assets/reactlogo.png";
import discordlogo from "../assets/discordlogo.png";
import terraria from "../assets/terrarialogo.png";

export const HERO_TEXT = `I'm a student attending the University of Redlands for computer science and mathematics, as well as a software 
engineer at Esri. I'm passionate about web development, and I am currently learning React, Next.js and Tailwind CSS.`;

export const PROJECTS = [
  {
    title: "This Website!",
    image: reactlogo,
    description:
      "I built this website using React, Next.js, Tailwind CSS, and Framer Motion.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Web Scraping Discord Bot",
    image: discordlogo,
    description:
      "I built a Discord bot so members of my server could view stats about their teammates and enemies in the game Valorant, without having to navigate to an external webpage.",
    technologies: ["JavaScript", "Node.js", "Discord.js", "Puppeteer"],
  },
  {
    title: "Terraria Mod",
    image: terraria,
    description:
      "Current work in progress. I am developing a mod for the game Terraria to completely overhaul the throwing class, which was sort of forgotten by the game devs. The mod features several new weapons, armor sets, accessories, and a unique NPC.",
    technologies: ["C#"],
  },
];
