import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Ibrahim",
  name: "Abdelrahman Ibrahim",
  role: "Energy Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "abd.m.elsayed@gmail.com",
  location: "Europe/Berlin",
  languages: ["English", "German", "Arabic"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to newsletter</>,
  description: <>Weekly insights on energy systems</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mrgraphic00-design",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abd.m.elsayed@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Abdelrahman Ibrahim Portfolio",
  description: "Portfolio website showcasing my work as an Energy Systems Engineer",
  headline: <>Energy Systems Engineer</>,
  subline: <>M.Eng. Energy Engineering student specializing in energy system modeling and optimization using Python.</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About - Abdelrahman Ibrahim",
  description: "Meet Abdelrahman Ibrahim, Energy Systems Engineer from Berlin",
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
    title: "Introduction",
    description: <>Energy systems engineer specializing in renewable energy integration and Python-based optimization.</>,
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OTH Amberg-Weiden",
        timeframe: "Feb 2026 - Aug 2026",
        role: "Master Thesis - Energy System Optimization",
        achievements: [
          <>Techno-economic optimization of campus energy system using PyPSA and Oemof</>,
          <>Load profile analysis with Python Pandas and NumPy</>,
          <>Achieved up to 40 percent CO2 reduction potential</>,
        ],
        images: [],
      },
      {
        company: "First Co. for Industrial Development",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer",
        achievements: [
          <>Mechanical maintenance of BHS and TCY corrugated cardboard machinery</>,
          <>Implemented preventive maintenance plans reducing downtime by 15 percent</>,
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
        name: "OTH Amberg-Weiden",
        description: <>M.Eng. International Energy Engineering - Expected 2026</>,
      },
      {
        name: "Mansoura University Egypt",
        description: <>B.Sc. Mechanical Engineering - GPA 2.3</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Energy System Modeling",
        description: <>PyPSA, Oemof, LCOE analysis, sector coupling, load profile analysis</>,
        images: [],
      },
      {
        title: "Programming",
        description: <>Python with Pandas, NumPy, Matplotlib for data analysis and optimization</>,
        images: [],
      },
      {
        title: "Simulation Tools",
        description: <>Polysun for PV systems, ANSYS FEA basics, SolidWorks CAD</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about energy systems",
  description: "Read what Abdelrahman Ibrahim has been up to recently",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects - Abdelrahman Ibrahim",
  description: "Energy engineering and optimization projects",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Photo gallery - Abdelrahman Ibrahim",
  description: "A photo collection",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
