import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Ibrahim",
  name: "Abdelrahman Ibrahim",
  role: "Energy Engineer",
  avatar: "/images/avatar.jpg",
  email: "abd.m.elsayed@gmail.com",
  location: "Europe/Berlin",
  languages: ["Arabic", "English", "German"],
};

const newsletter: Newsletter = {
  display: false, // Keep disabled
  title: <>Subscribe to newsletter</>,
  description: <>Weekly insights on energy systems</>,
};

const social: Social = [
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdelrahman-ibrahim-0b9b80166/", // Update with your actual URL
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
  title: "Abdelrahman Ibrahim - Energy Engineer",
  description: "Portfolio showcasing energy system optimization projects and mechanical engineering experience",
  headline: <>Energy Engineer & Mechanical Engineer</>,
  featured: {
    display: true,
    title: <>Master's Thesis</>,
    href: "/work",
  },
  subline: <>M.Eng. Energy Engineering student at OTH Amberg-Weiden, specializing in energy system modeling, optimization, and renewable energy integration using Python frameworks like PyPSA and Oemof. Former Formula Student team leader with hands-on industrial maintenance experience.</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About - Abdelrahman Ibrahim",
  description: "Meet Abdelrahman Ibrahim, Energy Engineer from Berlin, Germany",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Keep disabled unless you want booking
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: <>Berlin-based energy systems engineer passionate about accelerating the energy transition through data-driven optimization and renewable energy integration. Combining mechanical engineering fundamentals with advanced Python programming skills for energy system modeling. Former Formula Student team leader with proven track record in industrial maintenance and project management.</>,
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
          <>Techno-economic optimization of campus energy system using PyPSA and Oemof frameworks for LCOE minimization and CO₂ reduction</>,
          <>Load profile analysis and time-series data processing with Python (Pandas, NumPy) for electrical and thermal demand optimization</>,
          <>Component sizing for PV arrays, battery energy storage systems, and heat pumps using linear optimization algorithms</>,
          <>Sector coupling integration connecting electrical and thermal energy systems for improved flexibility and efficiency</>,
          <>Achieved up to 40% CO₂ reduction potential through optimized renewable energy integration and storage sizing</>,
        ],
        images: [],
      },
      {
        company: "First Co. for Industrial Development S.A.E.",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer",
        achievements: [
          <>Directed comprehensive mechanical maintenance for BHS and TCY corrugated cardboard production lines including Bobst SPO160, DF924, P1600, and MarquipWardUnited machines</>,
          <>Executed expert troubleshooting and diagnostics, rapidly resolving complex mechanical failures and minimizing production downtime by approximately 15%</>,
          <>Pioneered proactive preventive maintenance schedules significantly improving machinery reliability and operational efficiency</>,
          <>Championed precision engineering improvements optimizing production output and reducing operational waste</>,
        ],
        images: [],
      },
      {
        company: "Mansoura Motorsport Team",
        timeframe: "2020 - 2023",
        role: "Head of Suspension & Steering Systems - Formula Student & EV Rally",
        achievements: [
          <>Led and mentored a sub-team of 5 engineers in designing, simulating, and manufacturing suspension and steering systems for Formula Student race cars</>,
          <>Formula Student UK 2021 and 2022: Guided team to 27th place overall out of 65 teams and 14th in Cost and Manufacturing category</>,
          <>Electric Vehicle Egypt Rally 2022: Pioneered EV suspension design contributing to 4th place overall out of 19 teams and 2nd place in business plan</>,
          <>Directed complete suspension system design lifecycle using SolidWorks CAD and ANSYS FEA for structural analysis and optimization</>,
          <>Focused on lightweight design principles and regenerative braking integration for enhanced energy efficiency</>,
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
        description: <>M.Eng. International Energy Engineering (Expected graduation: August 2026) - Projects: Energy Management System Design for Residential City Quarter using Python; Solar PV System Simulation using Polysun with performance and CO₂ analysis</>,
      },
      {
        name: "Mansoura University, Egypt",
        description: <>B.Sc. Mechanical Power Engineering (Sep 2018 - Jul 2023) - Final Grade: Very Good (GPA 2.3) - Thesis: Design of Formula Student Race Car (Achieved Excellent Grade, 95%)</>,
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
        description: <>Polysun for PV system simulation and performance analysis • ANSYS for FEA structural analysis • SolidWorks with CSWP, CSWP-WD, and CSWA certifications • AutoCAD for technical drawing • DCS (Distributed Control Systems) for process monitoring</>,
        images: [],
      },
      {
        title: "Maintenance & Manufacturing",
        description: <>Lean Six Sigma Black Belt certified • Preventive and predictive maintenance strategies • Troubleshooting and root cause analysis • Non-Destructive Testing (NDT) • Quality Control and assurance • Process optimization and waste reduction • Hydraulic and pneumatic systems • Rotating equipment (pumps, compressors, turbines)</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>Arabic (Native) • English (C1 - Fluent) • German (B1 - Intermediate, working towards B2)</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on energy systems",
  description: "Articles about energy optimization, Python, and renewable energy",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects - Abdelrahman Ibrahim",
  description: "Energy system optimization and engineering projects",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery - Abdelrahman Ibrahim",
  description: "Project photos and visualizations",
  images: [], // We'll hide this tab
};

export { person, social, newsletter, home, about, blog, work, gallery };
