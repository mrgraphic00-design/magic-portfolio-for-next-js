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
    name: "CV (English)",
    icon: "document",
    link: "/cv/Abdelrahman_Ibrahim_CV_EN.pdf",
    essential: true,
  },
  {
    name: "CV (German)",
    icon: "document",
    link: "/cv/Abdelrahman_Ibrahim_CV_DE.pdf",
    essential: true,
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
    display: false,
    title: <>Featured</>,
    href: "/work",
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
        company: "OTH Amberg-Weiden",
        timeframe: "Feb 2026 - Aug 2026",
        role: "Master Thesis - Energy System Optimization",
        achievements: [
          <>Techno-economic optimization of campus energy system using PyPSA and Oemof frameworks</>,
          <>Load profile analysis and time-series data processing with Python (Pandas, NumPy)</>,
          <>Component sizing for PV arrays, battery energy storage systems, and heat pumps</>,
          <>Achieved up to 40% CO₂ reduction potential through optimized renewable energy integration</>,
        ],
        images: [],
      },
      {
        company: "First Co. for Industrial Development S.A.E.",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer",
        achievements: [
          <>Directed comprehensive mechanical maintenance for BHS and TCY corrugated cardboard production lines including Bobst SPO160, DF924, P1600, and MarquipWardUnited machines</>,
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
        name: "OTH Amberg-Weiden, Germany",
        description: <>M.Eng. International Energy Engineering | March 2024 - Present (Expected graduation: August 2026). Projects: Energy Management System Design for a Residential City Quarter using Python (Pandas, NumPy); Solar PV System Simulation using Polysun with system performance and CO₂ footprint calculations</>,
      },
      {
        name: "Mansoura University, Egypt",
        description: <>B.Sc. Mechanical Power Engineering | September 2018 - July 2023. Final Grade: Very Good (GPA: 2.3). Thesis: Design of Formula Student Race Car (Achieved Excellent Grade, 95%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Energy System Modeling & Optimization",
        description: <>PyPSA framework for power system analysis • Oemof for energy system modeling • LCOE analysis and economic evaluation • Sector coupling and integrated energy systems • Load profile analysis and demand forecasting • Renewable energy integration strategies • Mathematical optimization and linear programming</>,
        images: [],
      },
      {
        title: "Programming & Data Analysis",
        description: <>Python for scientific computing and data analysis • Pandas and NumPy for data manipulation • Matplotlib for visualization • Time-series analysis and processing • Energy data analytics • Mathematical modeling and simulation</>,
        images: [],
      },
      {
        title: "Engineering Software & Simulation",
        description: <>Polysun for PV system simulation and performance analysis • ANSYS for FEA structural analysis (Basic) • SolidWorks (CSWP, CSWP-WD, CSWA certifications) • AutoCAD (Basic)</>,
        images: [],
      },
      {
        title: "Maintenance & Manufacturing",
        description: <>Lean Six Sigma Black Belt certified • Preventive and predictive maintenance strategies • Troubleshooting and root cause analysis • Non-Destructive Testing (NDT) • Quality Control and assurance • Process optimization and waste reduction • Hydraulic and pneumatic systems • Rotating equipment maintenance (pumps, compressors, turbines)</>,
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

// const blog: Blog = {
//   path: "/blog",
//   label: "Blog",
//   title: "Insights on energy systems",
//   description: "Articles about energy optimization and Python",
// };

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects - Abdelrahman Ibrahim",
  description: "Energy system optimization projects",
};

// const gallery: Gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: "Gallery - Abdelrahman Ibrahim",
//   description: "Project photos",
//   images: [],
// };

export { person, social, home, about, work };
