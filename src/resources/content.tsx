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
    description: (
      <>
        <Text as="p">
          I am currently pursuing a Master of Engineering in International Energy Engineering at OTH
          Amberg-Weiden, Germany (expected graduation: Autumn 2026), with a strong focus on energy
          management, smart grids, and solar energy integration. My studies emphasize the
          development of sustainable and intelligent energy systems that support the transition
          toward a cleaner and more efficient global energy landscape.
        </Text>
        <Text as="p">
          With a background in Mechanical Engineering, I bring a solid technical foundation in
          power generation, industrial systems, and process optimization. My academic and
          professional experiences have strengthened my expertise in energy system analysis,
          renewable integration, and data-driven energy management solutions. I am particularly
          interested in leveraging digital tools and automation to enhance the performance and
          reliability of modern energy infrastructures.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "First Co.",
        timeframe: "Nov 2023 – Mar 2024",
        role: "Mechanical Engineer — Packing Industry",
        achievements: [
          <>
            Directed comprehensive mechanical maintenance for BHS and TCY corrugated cardboard
            production lines (Bobst SPO160, DF924, P1600, MarquipWardUnited).
          </>,
          <>
            Executed expert troubleshooting and diagnostics, rapidly resolving complex mechanical
            failures and effectively minimizing production downtime.
          </>,
          <>
            Pioneered and implemented proactive preventive maintenance schedules, significantly
            improving machinery reliability and enhancing operational efficiency.
          </>,
          <>
            Championed precision engineering and efficiency improvements, optimizing production
            output and reducing operational waste.
          </>,
        ],
        images: [],
      },
      {
        company: "Egyptian Electricity Holding Company",
        timeframe: "Jul 2022 – Aug 2022",
        role: "Internship — Power Generation Plant",
        achievements: [
          <>
            Observed and assisted in operation and maintenance procedures for steam turbines and
            auxiliary systems in a large-scale thermal power plant.
          </>,
          <>
            Gained hands-on exposure to grid-connected generation, control room operations, and
            plant safety protocols.
          </>,
          <>
            Documented performance metrics and contributed to maintenance checklists used by
            senior engineers.
          </>,
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
        description: (
          <>
            <strong>M.Eng. International Energy Engineering</strong> — 03/2024 – Present (Expected:
            Aug 2026).
            {" "}Key projects: Energy Management System Design for a Residential City Quarter
            (Python, Pandas, NumPy); Solar PV System Simulation — economical vs. ecological
            configuration comparison (Polysun); Master's Thesis — Techno-economic optimisation of
            OTH Amberg campus energy system using PyPSA.
          </>
        ),
      },
      {
        name: "Mansoura University",
        description: (
          <>
            <strong>B.Sc. Mechanical Power Engineering</strong> — 09/2018 – 07/2023. Final Grade:
            Very Good (GPA 2.3). Thesis: Design of Formula Student Race Car — Achieved Excellent
            Grade (95%).
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Programming & Data Analysis",
        description: (
          <>
            Python · Pandas · NumPy · PyPSA · Oemof · Linear Programming &amp; Optimisation
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "PyPSA" },
          { name: "Oemof" },
        ],
        images: [],
      },
      {
        title: "Engineering Software",
        description: (
          <>
            AutoCAD · ANSYS (Basic FEA) · Polysun · SolidWorks (CSWP certified) · Microsoft
            Office Suite
          </>
        ),
        tags: [
          { name: "AutoCAD", icon: "autocad" },
          { name: "ANSYS" },
          { name: "Polysun" },
          { name: "SolidWorks" },
        ],
        images: [],
      },
      {
        title: "Energy Systems",
        description: (
          <>
            Smart Grids · Renewable Energy Integration · Energy Management Systems · Sector
            Coupling · Battery Storage · Heat Pumps · PV Design
          </>
        ),
        tags: [
          { name: "Smart Grids" },
          { name: "Solar PV" },
          { name: "Battery Storage" },
          { name: "Heat Pumps" },
          { name: "Sector Coupling" },
        ],
        images: [],
      },
      {
        title: "Maintenance & Manufacturing",
        description: (
          <>
            Preventive &amp; Predictive Maintenance · Troubleshooting · NDT · Quality Control ·
            Lean Six Sigma (Black Belt)
          </>
        ),
        tags: [
          { name: "Lean Six Sigma" },
          { name: "Predictive Maintenance" },
          { name: "NDT" },
          { name: "Quality Control" },
        ],
        images: [],
      },
      {
        title: "Languages",
        description: <>Arabic (Native) · English (C1) · German (B1)</>,
        tags: [
          { name: "Arabic" },
          { name: "English (C1)" },
          { name: "German (B1)" },
        ],
        images: [],
      },
      {
        title: "Certifications",
        description: (
          <>
            <Text as="div">• Lean Six Sigma Black Belt (01/2024)</Text>
            <Text as="div">
              • Comprehensive Rotating Equipment Diploma (10/2023): Pumps, Gas Compressors, Gas
              Turbines, Vibration Monitoring &amp; Analysis, Machine Alignment, Balancing,
              Mechanical Seals.
            </Text>
            <Text as="div">• Heavy Equipment Hydraulics Systems (11/2021)</Text>
            <Text as="div">
              • Supply Chain Management Fundamentals — American Chamber of Commerce in Egypt
              (09/2021)
            </Text>
            <Text as="div">• Certified SolidWorks CSWP-WD, CSWP, CSWA (05/2021)</Text>
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog - Abdelrahman Ibrahim",
  description: "Insights on energy engineering, sustainability, and engineering projects.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Projects - Abdelrahman Ibrahim",
  description: "Energy system optimisation and engineering projects",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery - Abdelrahman Ibrahim",
  description: "A collection of engineering project visuals and diagrams.",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
