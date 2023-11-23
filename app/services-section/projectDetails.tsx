export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string | undefined;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Sandbox Research",
    description:
      "Quantitative Trading Firm",
    technologies: ["HFT", "py", "TF", "More"],
    github: "https://github.com/owenAPI/SandboxResearch",
    demo: "https://drive.google.com/file/d/165N3StfyU2XSX5kWzPZayHizmRYeonTm/view?usp=drive_link",
    image: require(".//../../public/projects/sandbox.png"),
    available: true,
  },
  {
    id: 1,
    name: "dYx",
    description:
      "Development Group",
    technologies: ["py", "QL", "js", "tf", "More"],
    github: "https://github.com/owenAPI/dYxCODE",
    demo: "",
    image: require(".//../../public/projects/dyx.png"),
    available: true,
  },
  {
    id: 2,
    name: "215 Partners",
    description:
      "Venture Capital",
    technologies: [],
    github: "",
    demo: "",
    image: require(".//../../public/projects/215.png"),
    available: false,
  },
  {
    id: 3,
    name: "Clickroot",
    description:
      "Your front-page of the internet.",
    technologies: ["js", "QL", "TS", "More"],
    github: "",
    image: require(".//../../public/projects/clickroot-new.png"),
    available: false,
  },
  //{
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
