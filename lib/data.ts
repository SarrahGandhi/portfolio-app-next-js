export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
}

import { IProject } from '@/types';
export const MY_EXPERIENCE: ExperienceItem[] = [
  {
    title: "Web Developer & Designer",
    company: "Freelancer",
    duration: "2022 - Present"
  },
  {
    title: "Full Stack Developer Intern",
    company: "IDesign Tech",
    duration: "June 2025 - August 2025"
  },
  {
    title: "Lead Frontend Developer",
    company: "Slay Coffee",
    duration: "Sept 2022 - April 2023"
  }
];

export const PROJECTS: IProject[] = [
  {
    title: "Milestone Manager",
    year: 2025,
    description: "A Event Planning App for Wedding Management",
    role: "Full Stack Developer",
    techStack: ["React", "Supabase", "Tailwind CSS"],
    thumbnail: "/thumbnail.png",
    longThumbnail: "/long-thumbnail.png",
    images: ["/image1.png", "/image2.png"],
    slug: "milestone-manager",
    link: "https://github.com/SarrahGandhi/milestone-manager-react.git",
  }
];
export const MY_STACK = {
  frontend: [
    {
      name: 'HTML',
      icon: '/logo/html.png',
    },
    {
      name: 'CSS',
      icon: '/logo/css.png',
    },
    {
      name: 'JavaScript',
      icon: '/logo/js.png',
    },
    {
      name: 'TypeScript',
      icon: '/logo/ts.png',
    },
    {
      name: 'React',
      icon: '/logo/react.png',
    },
    {
      name: 'Next.js',
      icon: '/logo/next.png',
    },

    {
      name: 'Tailwind CSS',
      icon: '/logo/tailwind.png',
    },


    {
      name: 'Bootstrap',
      icon: '/logo/bootstrap.svg',
    },

  ],
  backend: [
    {
      name: 'Node.js',
      icon: '/logo/node.png',
    },

    {
      name: 'Express.js',
      icon: '/logo/express.png',
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/logo/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      icon: '/logo/postgreSQL.png',
    },
    {
      name: 'MongoDB',
      icon: '/logo/mongodb.svg',
    },

  ],
  tools: [
    {
      name: 'Git',
      icon: '/logo/git.png',
    },
    {
      name: 'Docker',
      icon: '/logo/docker.svg',
    },
    {
      name: 'AWS',
      icon: '/logo/aws.png',
    },
  ],
  design: [
    {
      name: 'Figma',
      icon: '/logo/figma.png',
    },
    {
      name: 'Photoshop',
      icon: '/logo/photoshop.png',
    },
    {
      name: 'Illustrator',
      icon: '/logo/illustrator.png',
    }
  ],
};