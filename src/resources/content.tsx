import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abdelrahman",
  lastName: "Ibrahim",
  name: `Abdelrahman Ibrahim`,
  role: "Energy Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "abd.m.elsayed@gmail.com",
  location: "Europe/Berlin", // IANA time zone identifier
  languages: ["English", "German", "Arabic"],
};

const newsletter: Newsletter = {
  display: false, // Set to true if you want newsletter section
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on energy systems, Python, and renewable energy optimization</>,
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
    link: "https://www.linkedin.com/in/abdelrahman-ibrahim-0b9b80166/", 
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Energy Systems Engineer & Python Developer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Master's Thesis
        </Text>
      </Row>
    ),
    href: "/work/campus-energy-optimization",
  },
  subline: (
    <>
      I'm Abdelrahman, an M.Eng. Energy Engineering student at <Text as="span" size="xl" weight="strong">OTH Amberg-Weiden</Text>, specializing in energy system <br /> modeling and optimization using Python frameworks like PyPSA and Oemof.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to true if you want calendar booking
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abdelrahman is a Berlin-based energy systems engineer with a passion for accelerating the energy transition through data-driven optimization. His work focuses on renewable energy integration, sector coupling, and Python-based energy system modeling. Currently completing his Master's thesis on techno-economic campus energy optimization at OTH Amberg-Weiden.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OTH Amberg-Weiden",
        timeframe: "Feb 2026 - Aug 2026",
        role: "Master's Thesis - Energy System Optimization",
        achievements: [
          <>
            Techno-economic optimization of campus energy system using <Text as="span" weight="strong">PyPSA</Text> and <Text as="span" weight="strong">Oemof</Text> frameworks, achieving up to 40% CO₂ reduction potential.
          </>,
          <>
            Load profile analysis and time-series data processing with Python (Pandas, NumPy) for electrical and thermal demand optimization.
          </>,
          <>
            Component sizing for PV arrays, battery storage, and heat pumps using linear optimization and sector coupling integration.
          </>,
        ],
        images: [],
      },
      {
        company: "First Co. for Industrial Development S.A.E.",
        timeframe: "Nov 2023 - Mar 2024",
        role: "Mechanical Engineer",
        achievements: [
          <>
            Responsible for mechanical maintenance of BHS and TCY corrugated cardboard machinery, ensuring smooth production operations.
          </>,
          <>
            Implemented preventive maintenance plans, reducing equipment downtime by approximately 15%.
          </>,
          <>
            Conducted fault analysis and technical improvements to enhance reliability and production efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Alexandria Shipyard",
        timeframe: "Sep 2022",
        role: "Engineering Intern",
        achievements: [
          <>
            Worked on shipbuilding phases with focus on energy efficiency and operation of pumps, compressors, and energy-intensive equipment.
          </>,
          <>
            Supported quality assurance measures including NDT and hydrostatic testing, plus pipeline production for ship propulsion systems.
          </>,
        ],
        images: [],
      },
      {
        company: "ADES (Oil & Gas)",
        timeframe: "Aug 2022",
        role: "Engineering Intern",
        achievements: [
          <>
            Hands-on experience with onshore/offshore drilling technologies and analysis of Blowout Preventer (BOP) systems.
          </>,
          <>
            Participated in diesel engine overhaul for performance optimization and applied industry safety standards.
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
        name: "Ostbayerische Technische Hochschule Amberg-Weiden",
        description: <>M.Eng. Internationale Energietechnik (International Energy Engineering) – Expected graduation: August 2026</>,
      },
      {
        name: "Mansoura University, Egypt",
        description: <>B.Sc. Maschinenbau (Mechanical Engineering) – GPA: 2.3 (Good) – Bachelor thesis: Formula Student race car design (95%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Energy System Modeling",
        description: (
          <>Specialized in energy system optimization using PyPSA and Oemof frameworks for LCOE analysis, sector coupling, and load profile analysis.</>
        ),
        tags: [
          {
            name: "PyPSA",
            icon: "python",
          },
          {
            name: "Oemof",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Python Programming",
        description: (
          <>Proficient in Python for data analysis, mathematical optimization, and time-series processing using Pandas, NumPy, and Matplotlib.</>
        ),
        
