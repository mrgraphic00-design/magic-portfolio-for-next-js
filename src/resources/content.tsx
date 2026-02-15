import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Ibrahim",
  name: "Abdelrahman Ibrahim",
  role: "Master's Student in Energy Engineering & Mechanical Engineer",
  avatar: "/images/avatar.jpg",
  email: "abd.m.elsayed@gmail.com",
  location: "Europe/Berlin",
  languages: ["Arabic", "English", "German"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to newsletter</>,
  description: <>Weekly insights on energy systems</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdelrahman-ibrahim-0b9b80166/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abd.m.elsayed@gmail.com",
    essential: true,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+491786872309",
    essential: true,
  },
  {
    name: "CV (English)",
    icon: "document",
    link: "/cv/Abdelrahman_Ibrahim_CV_EN.pdf",
    essential: false,
  },
  {
    name: "CV (German)",
    icon: "document",
    link: "/cv/Abdelrahman_Ibrahim_CV_DE.pdf",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Abdelrahman Ibrahim",
  description: "Master's Student in Energy Engineering & Mechanical Engineer",
  headline: <>Abdelrahman Ibrahim</>,
  featured: {
    display: true,
    title: <>Master's Thesis</>,
    href: "/work/master-thesis-energy-optimization",
  },
  subline: <>Master's Student in Energy Engineering & Mechanical Engineer</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About - Abdelrahman Ibrahim",
  description: "Master's Student in Energy Engineering at OTH Amberg-Weiden",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Summary",
    description: <>I am currently pursuing a Master of Engineering in International Energy Engineering at OTH Amberg-Weiden, Germany (expected graduation: Autumn 2026), with a strong focus on energy management, smart grids, and solar energy integration. My studies emphasize the development of sustainable and intelligent energy systems that support the transition toward a cleaner and more efficient global energy landscape. With a background in Mechanical Engineering, I bring a solid technical foundation in power generation, industrial systems, and process optimization. My academic and professional experiences have strengthened my expertise in energy system analysis, renewable integration, and data-driven energy management solutions. I am particularly interested in leveraging digital tools and automation to enhance the performance and reliability of modern energy infrastructures.</>,
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "First Co. for Industrial Development S.A.E., Cairo, Egypt",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer (Packing Industry)",
        achievements: [
          <>Directed comprehensive mechanical maintenance for BHS and TCY corrugated cardboard production lines (Bobst SPO160, DF924, P1600, MarquipWardUnited)</>,
          <>Executed expert troubleshooting and diagnostics, rapidly resolving complex mechanical failures and effectively minimizing production downtime</>,
          <>Pioneered and implemented proactive preventive maintenance schedules, significantly improving machinery reliability and enhancing operational efficiency</>,
          <>Championed precision engineering and efficiency improvements, optimizing production output and reducing operational waste</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Ostbayerische Technische Hochschule Amberg-Weiden, Germany",
        description: <>M.Eng. International Energy Engineering | 03/2024 - Present (Expected: Aug 2026). Projects: Energy Management System Design for a Residential City Quarter - Developed a cost- and CO₂-optimized hybrid energy system using Python (Pandas, NumPy); Solar PV System Simulation - Designed and compared an economical vs ecological PV configuration using Polysun; calculated system performance, and CO₂ footprint</>,
      },
      {
        name: "Mansoura University, Egypt",
        description: <>B.Sc. Mechanical Power Engineering | 09/2018 - 07/2023. Final Grade: Very Good (GPA: 2.3). Thesis: Design of Formula Student Race Car (Achieved Excellent Grade, 95%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Engineering Software & Tools",
        description: <>AutoCAD (Basic) • ANSYS (Basic FEA) • Python • Polysun</>,
        images: [],
      },
      {
        title: "Maintenance & Manufacturing",
        description: <>Preventive & Predictive Maintenance • Troubleshooting • NDT • Quality Control (QC) • Lean Six Sigma (Process Optimization, Waste Reduction)</>,
        images: [],
      },
      {
        title: "Office Productivity",
        description: <>Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>Arabic (Native) • English (C1 Level) • German (B1 Level)</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on energy systems",
  description: "Articles about energy optimization and Python",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects - Abdelrahman Ibrahim",
  description: "Energy system optimization projects",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery - Abdelrahman Ibrahim",
  description: "Project photos",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
