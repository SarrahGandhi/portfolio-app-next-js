export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

import { IProject } from "@/types";
export const MY_EXPERIENCE: ExperienceItem[] = [
  {
    title: "Web Developer & Designer",
    company: "Freelancer",
    duration: "2022 - Present",
    highlights: [
      "Designed and developed responsive websites for 5+ clients across hospitality, retail, and personal branding",
      "Built custom UI systems in React and Next.js with a focus on clean, conversion-aware layouts",
      "Delivered full brand identity packages including logos, typography, and style guides",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "IDesign Tech",
    duration: "June 2025 - August 2025",
    highlights: [
      "Developed and maintained front-end features using React, TypeScript, and Tailwind CSS",
      "Collaborated with cross-functional teams to ship user-facing product improvements",
      "Implemented RESTful API integrations and optimized database queries for performance",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company: "Slay Coffee",
    duration: "Sept 2022 - April 2023",
    highlights: [
      "Led frontend development of the e-commerce platform, improving page load times by 40%",
      "Managed a team of 3 developers and coordinated sprint planning and code reviews",
      "Designed and built a responsive product catalogue with dynamic filtering and search",
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "Milestone Manager",
    year: 2025,
    description: "A full-stack wedding planning app built with React and Supabase. Couples and planners can track milestones, manage vendors, and coordinate timelines — with real-time updates and a clean Tailwind UI.",
    role: "Full Stack Developer",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    thumbnail: "/milestone-manager.png",
    longThumbnail: "/app-home.png",
    images: ["/milestone-manager.png", "/app-home.png", "/app-checkout.png"],
    slug: "milestone-manager",
    link: "https://github.com/SarrahGandhi/milestone-manager-react.git",
    liveUrl: "https://milestone-manager-react.vercel.app/",
  },
  {
    title: "Bullet Journal",
    year: 2025,
    description: "A digital bullet journal built with React and Supabase. Users can create daily logs, habit trackers, and custom collections — with persistent storage and a minimal, distraction-free interface styled in Tailwind CSS.",
    role: "Full Stack Developer",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    thumbnail: "/bullet-journal-cover.png",
    longThumbnail: "/bullet-journal-cover.png",
    images: ["/bullet-journal-cover.png", "/app-home.png", "/app-checkout.png"],
    slug: "bullet-journal",
    link: "https://github.com/SarrahGandhi/bullet-journal-react.git",
    liveUrl: "https://bullet-journal-react.vercel.app/",
  },
  {
    title: "Balance of Power",
    year: 2025,
    description: "A browser-based clone of the Ravensburger Echo board game, built with vanilla HTML, CSS, and JavaScript. Features turn-based game logic, interactive UI, and responsive design — no frameworks, no dependencies.",
    role: " Team Lead",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/balance-of-power.png",
    longThumbnail: "/menu-1.jpg",
    images: ["/balance-of-power.png", "/menu-1.jpg", "/menu-2.jpg"],
    slug: "balance-of-power",
    link: "https://github.com/SarrahGandhi/balance-Of-Power.git",
    liveUrl: "https://balance-of-power-game.vercel.app/",
  },
  {
    title: "Smokehouse Riot",
    year: 2024,
    description: "A complete brand identity system for Smokehouse Riot, designed in Figma. Includes logo suite, colour palette, typography guidelines, and usage rules — built to maintain consistency across print and digital touchpoints.",
    role: "Designer",
    techStack: ["Figma", "Graphic Design", "Branding"],
    thumbnail: "/smokehouseriotlogo.png",
    longThumbnail: "/Altlogo.png",
    images: ["/smokehouseriotlogo.png", "/Altlogo.png", "/Vector@2x.png"],
    slug: "branding-kit",
    link: "/branding-kit",
  },
  {
    title: "Elite Studios",
    year: 2025,
    description: "Brand identity and logo design for Elite Studios, crafted in Figma. Covers primary and alternate logo marks, brand colours, and type hierarchy — delivering a polished, professional visual language for the studio.",
    role: "Designer",
    techStack: ["Figma", "Graphic Design", "Branding"],
    thumbnail: "/elite-studios-cover.png",
    longThumbnail: "/elite-studios-cover.png",
    images: ["/elite-studios-cover.png", "/Altlogo.png", "/Vector@2x.png"],
    slug: "elite-studios",
    link: "/elite-studios",
  },
  // {
  //   title: "Where's My Money",
  //   year: 2025,
  //   description: "A finance Tracking Website",
  //   role: " Full Stack Developer",
  //   techStack: ["Angular", "Firebase", "CSS"],
  //   thumbnail: "/thumbnail.png",
  //   longThumbnail: "/long-thumbnail.png",
  //   images: ["/image1.png", "/image2.png"],
  //   slug: "balance-of-power",
  //   link: "https://github.com/SarrahGandhi/where-is-my-money-app-angular.git",
  // }
];
export const MY_STACK = {
  frontend: [
    {
      name: "HTML",
      icon: "/logo/html.png",
    },
    {
      name: "CSS",
      icon: "/logo/css.png",
    },
    {
      name: "JavaScript",
      icon: "/logo/js.png",
    },
    {
      name: "TypeScript",
      icon: "/logo/ts.png",
    },
    {
      name: "React",
      icon: "/logo/react.png",
    },
    {
      name: "Next.js",
      icon: "/logo/next.png",
    },

    {
      name: "Tailwind CSS",
      icon: "/logo/tailwind.png",
    },

    {
      name: "Bootstrap",
      icon: "/logo/bootstrap.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/logo/node.png",
    },
    {
      name: "Express.js",
      icon: "/logo/express.png",
    },
    {
      name: "Supabase",
      icon: "/logo/supabase.png",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "/logo/mysql.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/logo/postgreSQL.png",
    },
    {
      name: "MongoDB",
      icon: "/logo/mongodb.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/logo/git.png",
    },
    {
      name: "Docker",
      icon: "/logo/docker.svg",
    },
    {
      name: "AWS",
      icon: "/logo/aws.png",
    },
    {
      name: "Cloudflare",
      icon: "/logo/cloudflare.svg",
    },
  ],
  design: [
    {
      name: "Figma",
      icon: "/logo/figma.png",
    },
    {
      name: "Photoshop",
      icon: "/logo/photoshop.png",
    },
    {
      name: "Illustrator",
      icon: "/logo/illustrator.png",
    },
  ],
};
