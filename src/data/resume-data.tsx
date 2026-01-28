import { Globe, Server, Terminal, Cpu } from "lucide-react";

export const RESUME_DATA = {
  name: "Tishy Patel",
  initials: "TP",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/Ahmedabad",
  about:
    "Software Engineer specializing in modernizing legacy systems and building intelligent AI agents.",
  summary:
    "Full-stack engineer with 4+ years of experience. I bridge the gap between stability and innovation—maintaining critical legacy PHP systems while building next-generation AI agents with NestJS and modern interfaces with Angular/React.",
  avatarUrl: "https://github.com/shadcn.png", // Replace with your actual photo later
  personalWebsiteUrl: "https://tishypatel.com",
  contact: {
    email: "tishypatel97@gmail.com",
    tel: "+918469602219",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: Globe,
      },
    ],
  },
  education: [
    {
      school: "Charusat University",
      degree: "Bachelor's in Computer Engineering",
      start: "2018",
      end: "2021",
    },
    {
      school: "Parul University",
      degree: "Diploma in Computer Engineering",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Albiorix Technologies",
      link: "https://albiorix.com",
      badges: ["Senior Engineer", "AI Integration", "NestJS"],
      title: "Software Engineer",
      start: "May 2023",
      end: "Present",
      description:
        "Leading the integration of conversational AI into enterprise apps. Built a voice-enabled AI agent (NestJS/AWS) capable of autonomous appointment booking, while concurrently maintaining and securing legacy systems.",
    },
    {
      company: "HKRP Private Limited",
      link: "#",
      badges: ["Angular", "Enterprise", "Legacy Migration"],
      title: "Software Developer",
      start: "June 2021",
      end: "May 2023",
      description:
        "Engineered scalable component-based architectures for admin dashboards. Managed complex logic migration and performance optimization for high-traffic enterprise tools.",
    },
    {
      company: "Navpad Infotech",
      link: "#",
      badges: ["Internship"],
      title: "Intern Developer",
      start: "2018",
      end: "2019",
      description:
        "Full-stack web development training and shadow engineering.",
    },
  ],
  skills: {
    technical: [
      "Angular (Expert)",
      "React / Next.js",
      "NestJS / Node.js",
      "PHP (Legacy 5.6+)",
      "TypeScript",
      "Python",
    ],
    cloud_ai: [
      "AWS (Secrets Manager, Amplify)",
      "Amazon Lex / Bedrock",
      "OpenAI API",
      "Docker",
    ],
  },
  projects: [
    {
      title: "Voice-Enabled AI Agent",
      techStack: ["NestJS", "Amazon Lex", "Twilio", "WebSockets"],
      description:
        "An autonomous voice agent that handles inbound calls, qualifies leads, and books appointments in real-time. Reduced manual screening time by 40%.",
      link: { label: "Architecture", href: "#" },
    },
    {
      title: "Legacy PHP Modernization",
      techStack: ["PHP 5.6", "AWS Secrets Manager", "reCAPTCHA v3"],
      description:
        "Secured a 10-year-old legacy PHP system by integrating AWS Secrets Manager for credential rotation and implementing reCAPTCHA v3 to eliminate bot traffic without upgrading the core version.",
      link: { label: "Case Study", href: "#" },
    },
    {
      title: "Crypto Fintech Dashboard",
      techStack: ["Angular", "Web3.js", "RxJS"],
      description:
        "A real-time financial dashboard with secure wallet connectivity. Implemented complex state management for live currency updates and secure transaction signing.",
      link: { label: "Live Demo", href: "#" },
    },
  ],
} as const;
