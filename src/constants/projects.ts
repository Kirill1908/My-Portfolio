export type Project = {
  id: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

export const PROJECTS: Project[] = [
  {
    id: "niceGadgets",
    image: "/images/nice-gadgets.png",
    technologies: ["React", "TypeScript", "Bulma"],
    github: "https://github.com/Kirill1908/Nice-Gadgets",
    live: "https://kirill1908.github.io/Nice-Gadgets/",
  },
  {
    id: "natureGuardians",
    image: "/images/nature-guardians.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Kirill1908/Nature-Guardians",
    live: "https://nature-guardians.vercel.app/",
  },
  {
    id: "creativeBakery",
    image: "/images/creative-bakery.png",
    technologies: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/Kirill1908/Creative-Bakery-lp",
    live: "https://kirill1908.github.io/Creative-Bakery-lp/",
  },
  {
    id: "bangOlufsen",
    image: "/images/bang-olufsen.png",
    technologies: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/Kirill1908/Bang-Olufsen-lp",
    live: "https://kirill1908.github.io/Bang-Olufsen-lp/",
  },
  {
    id: "game2048",
    image: "/images/2048-game.jpg",
    technologies: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/Kirill1908/2048-Game",
    live: "https://kirill1908.github.io/2048-Game/",
  },
];
