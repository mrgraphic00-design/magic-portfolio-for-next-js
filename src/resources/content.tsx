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
  headline: <>Energy Systems Engineer and Python Developer</>,
  subline: <>M.Eng. Energy Engineering student specializing in energy system modeling and optimization using Python frameworks like PyPSA and Oemof.</>,
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
    description: <>Energy systems engineer specializing in renewable energy integration, sector coupling, and Python-based optimization frameworks. Currently completing Master thesis on techno-economic campus energy optimization.</>,
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
          <>Techno-economic optimization of campus energy system using PyPSA and Oemof frameworks</>,
          <>Load profile analysis and time-series data processing with Python Pandas and NumPy</>,
          <>Component sizing for PV arrays, battery storage, and heat pumps using linear optimization</>,
          <>Achieved up to 40 percent CO2 reduction potential in optimized configurations</>,
        ],
        images: [],
      },
      {
        company: "First Co. for Industrial Development",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer",
        achievements: [
          <>Responsible for mechanical maintenance of BHS and TCY corrugated cardboard machinery</>,
          <>Conducted fault analysis and repairs ensuring smooth production operations</>,
          <>Implemented preventive maintenance plans reducing downtime by approximately 15 percent</>,
        ],
        images: [],
      },
      {
        company: "Alexandria Shipyard",
        timeframe: "Sep 2022",
        role: "Engineering Intern",
        achievements: [
          <>Worked on shipbuilding phases with focus on energy efficiency and equipment maintenance</>,
          <>Quality assurance measures including NDT and hydrostatic testing</>,
        ],
        images: [],
      },
      {
        company: "ADES Oil and Gas",
        timeframe: "Aug 2022",
        role: "Engineering Intern",
        achievements: [
          <>Hands-on experience with onshore and offshore drilling technologies</>,
          <>Analysis of Blowout Preventer systems and safety standards application</>,
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
        description: <>M.Eng. International Energy Engineering - Expected graduation August 2026</>,
      },
      {
        name: "Mansoura University Egypt",
        description: <>B.Sc. Mechanical Engineering - GPA 2.3 - Bachelor thesis on Formula Student race car design achieved 95 percent</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Energy System Modeling",
        description: <>PyPSA framework, Oemof, LCOE analysis, sector coupling, load profile analysis, renewable energy integration</>,
        images: [],
      },
      {
        title: "Programming and Data Analysis",
        description: <>Python with Pandas, NumPy, and Matplotlib for data analysis, mathematical optimization, and time-series processing</>,
        images: [],
      },
      {
        title: "Simulation and Engineering Tools",
        description: <>Polysun for PV system simulation, ANSYS FEA basics, SolidWorks with CSWA, CSWP, and CSWA-WD certifications</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>Arabic native, English C1 fluent, German B1 intermediate working towards B2</>,
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
  description: "Energy engineering and optimization projects by Abdelrahman Ibrahim",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Photo gallery - Abdelrahman Ibrahim",
  description: "A photo collection by Abdelrahman Ibrahim",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
