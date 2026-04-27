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
      "Designed and shipped 8+ responsive websites across hospitality, retail, and personal branding, with average Lighthouse scores of 95+ on performance and accessibility",
      "Built custom UI systems in React and Next.js, cutting page load times by ~45% and lifting client conversion rates by up to 30%",
      "Delivered 6 full brand identity packages — logos, typography, and style guides — used across web, social, and print collateral",
      "Reduced post-launch design revisions by ~50% by introducing reusable component libraries and Figma design tokens",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "IDesign Tech",
    duration: "June 2025 - August 2025",
    highlights: [
      "Shipped 12+ front-end features in React, TypeScript, and Tailwind CSS across a 3-month internship, contributing to 2 production releases",
      "Collaborated with a cross-functional team of 6 (design, backend, QA) to deliver user-facing improvements that reduced reported UI bugs by ~35%",
      "Integrated 10+ RESTful API endpoints and optimized SQL queries, cutting average response time from ~800ms to under 300ms",
      "Wrote unit and integration tests that lifted coverage on touched modules from ~40% to 80%+",
    ],
  },
  {
    title: "Graphic & Marketing Growth Assistant Manager",
    company: "Slay Coffee",
    duration: "Sept 2022 - April 2023",
    highlights: [
      "Owned the visual identity across 20+ campaigns spanning Instagram, in-store collateral, and packaging, helping grow the brand’s Instagram following by ~3x (from ~15K to ~45K) in 8 months",
      "Designed 150+ social assets, menus, and promotional creatives in Figma and Adobe Suite, lifting average post engagement rate by ~60%",
      "Ran A/B tests on ad creatives and landing copy across Meta and Google Ads, improving click-through rates by ~25% and lowering cost-per-click by ~18%",
      "Partnered with the growth team on email and influencer campaigns that drove a ~40% uplift in monthly online orders and contributed to opening 2 new outlets",
      "Built reusable brand templates and a mini design system that cut creative turnaround time from ~3 days to under 24 hours",
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "Milestone Manager",
    year: 2025,
    description:
      "A full-stack wedding planning app built with React and Supabase. Couples and planners can track milestones, manage vendors, and coordinate timelines — with real-time updates and a clean Tailwind UI.",
    role: "Full Stack Developer",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    thumbnail: "/milestone-manager.png",
    longThumbnail: "/app-home.png",
    images: ["/milestone-manager.png", "/app-home.png", "/app-checkout.png"],
    slug: "milestone-manager",
    link: "https://github.com/SarrahGandhi/milestone-manager-react.git",
    liveUrl: "https://murtazasarrah.ca",
  },
  {
    title: "Bullet Journal",
    year: 2025,
    description:
      "A digital bullet journal built with React and Supabase. Users can create daily logs, habit trackers, and custom collections — with persistent storage and a minimal, distraction-free interface styled in Tailwind CSS.",
    role: "Full Stack Developer",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    thumbnail: "/bullet-journal-cover.png",
    longThumbnail: "/bullet-journal-cover.png",
    images: ["/bullet-journal-cover.png", "/app-home.png", "/app-checkout.png"],
    slug: "bullet-journal",
    link: "https://github.com/SarrahGandhi/bullet-journal-react.git",
    liveUrl: "https://journal.sarrahgandhi.com/",
  },
  {
    title: "Balance of Power",
    year: 2025,
    description:
      "A browser-based clone of the Ravensburger Echo board game, built with vanilla HTML, CSS, and JavaScript. Features turn-based game logic, interactive UI, and responsive design — no frameworks, no dependencies.",
    role: " Team Lead",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/balance-of-power.png",
    longThumbnail: "/menu-1.jpg",
    images: ["/balance-of-power.png", "/menu-1.jpg", "/menu-2.jpg"],
    slug: "balance-of-power",
    link: "https://github.com/SarrahGandhi/balance-Of-Power.git",
    liveUrl: "https://sarrahgandhi.github.io/balance-Of-Power/index.html",
  },
  {
    title: "Smokehouse Riot",
    year: 2024,
    description:
      "A complete brand identity system for Smokehouse Riot, designed in Figma. Includes logo suite, colour palette, typography guidelines, and usage rules — built to maintain consistency across print and digital touchpoints.",
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
    description:
      "Brand identity and logo design for Elite Studios, crafted in Figma. Covers primary and alternate logo marks, brand colours, and type hierarchy — delivering a polished, professional visual language for the studio.",
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

    {
      name: "GSAP",
      icon: "/logo/gsap.png",
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
    {
      name: "Firebase",
      icon: "/logo/firebase.svg",
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
      name: "GitHub",
      icon: "/logo/github.png",
    },
    {
      name: "VS Code",
      icon: "/logo/vscode.svg",
    },
    {
      name: "npm",
      icon: "/logo/npm.svg",
    },
    {
      name: "Docker",
      icon: "/logo/docker.svg",
    },
    {
      name: "Vercel",
      icon: "/logo/vercel.svg",
    },
    {
      name: "Render",
      icon: "/logo/render.svg",
    },
    {
      name: "AWS",
      icon: "/logo/aws.png",
    },
    {
      name: "Cloudflare",
      icon: "/logo/cloudflare.svg",
    },
    {
      name: "Google Analytics",
      icon: "/logo/google-analytics.svg",
    },
  ],
  platforms: [
    {
      name: "Wix",
      icon: "/logo/wix.svg",
    },
    {
      name: "Shopify",
      icon: "/logo/shopify.svg",
    },
    {
      name: "Squarespace",
      icon: "/logo/squarespace.svg",
    },
  ],
  infrastructure: [
    {
      name: "DNS",
      icon: "/logo/dns.svg",
    },
    {
      name: "SSL",
      icon: "/logo/ssl.svg",
    },
    {
      name: "Hosting",
      icon: "/logo/hosting.svg",
    },
    {
      name: "Reverse Proxy",
      icon: "/logo/reverse-proxy.svg",
    },
    {
      name: "CMS",
      icon: "/logo/cms.svg",
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
    {
      name: "InDesign",
      icon: "/logo/indesign.svg",
    },
  ],
};
