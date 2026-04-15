const resumeUrl = new URL("../../Vishwanatha_Reddy_Resume.pdf", import.meta.url).href;

type SocialLink = {
  label: string;
  href: string;
};

type Skill = {
  name: string;
  level: number;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tech: string[];
  images: Array<{ src: string; alt: string }>;
  links: Array<{ label: string; href: string; kind: "demo" | "github" }>;
};

export const personal = {
  name: "Vishwanatha Reddy R",
  shortName: "Vishwanatha",
  title: "Associate Data Engineer & Backend Developer",
  location: "Bangalore, Karnataka, India",
  email: "vishwanathareddy598@gmail.com",
  phone: "+91 78922 79940",
  availability: "Available for opportunities",
  description:
    "Associate Data Engineer focused on ETL pipelines, data marts, operational data stores, and backend systems that turn raw data into dependable business insight.",
  footerBlurb: "Associate Data Engineer & Software Developer",
  resumeUrl,
};

export const roles = [
  "Associate Data Engineer",
  "ETL Pipeline Builder",
  "Backend Developer",
  "Data Modeling Specialist",
  "Data Warehouse Developer",
  "Analytics-Focused Engineer",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const expertiseTags = ["ETL / ELT", "Data Modeling", "Backend APIs", "Analytics Delivery"];

export const heroSignals = [
  {
    label: "Core Focus",
    value: "Data pipelines, warehousing, and reporting systems",
  },
  {
    label: "Built With",
    value: "SQL, Python, Java, Spring Boot, and analytics tooling",
  },
  {
    label: "Based In",
    value: "Bangalore, open to full-time opportunities",
  },
];

export const heroStats = [
  { value: "2", label: "Professional Roles" },
  { value: "3+", label: "Featured Projects" },
  { value: "2", label: "Certifications" },
  { value: "9+", label: "Core Technologies" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vishwanatha789" },
  { label: "GitHub", href: "https://github.com/VISHWANATH2000" },
  { label: "Email", href: "mailto:vishwanathareddy598@gmail.com" },
  { label: "Phone", href: "tel:+917892279940" },
];

export const aboutParagraphs = [
  "I'm an Associate Data Engineer at Infostats, where I design data marts, operational data stores, and ETL/ELT workflows that support reporting, analytics, and day-to-day decision-making.",
  "My sweet spot is the layer between source systems and usable insight: clean schemas, dependable pipelines, optimized SQL, and backend services that make data easier to trust and use.",
  "I also enjoy collaborating across teams, supporting junior teammates, and building software that is not only functional, but clear, maintainable, and production-ready.",
];

export const quickFacts = [
  "Bangalore, India",
  "Open to data and backend roles",
  "MCA, CGPA 8.18",
];

export const capabilityCards = [
  {
    title: "Data Engineering",
    description: "ETL pipelines, data marts, ODS, warehousing",
  },
  {
    title: "Backend Development",
    description: "Spring Boot, REST APIs, JPA, Hibernate",
  },
  {
    title: "AI & ML",
    description: "OCR, NLP, analytics, and ML experimentation",
  },
];

export const skillGroups = [
  {
    id: "data",
    label: "Data Engineering",
    description: "Data systems, marts, pipeline reliability, and governance foundations.",
    skills: [
      { name: "SQL & Query Optimization", level: 90 },
      { name: "ETL / ELT Pipelines", level: 85 },
      { name: "Data Modeling (OLTP/OLAP)", level: 80 },
      { name: "Data Warehousing (ODS, Marts)", level: 85 },
      { name: "Data Quality & Governance", level: 80 },
      { name: "Python (Pandas)", level: 75 },
    ] satisfies Skill[],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Service design, APIs, persistence layers, and solid Java implementation.",
    skills: [
      { name: "Java / Core Java", level: 88 },
      { name: "Spring Boot", level: 82 },
      { name: "REST APIs", level: 85 },
      { name: "MySQL", level: 87 },
      { name: "JPA / Hibernate", level: 78 },
    ] satisfies Skill[],
  },
  {
    id: "web",
    label: "Web & Tools",
    description: "Frontend fundamentals, version control, and practical delivery tooling.",
    skills: [
      { name: "HTML5 / CSS3", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Git / GitHub", level: 82 },
      { name: "Cloud Services", level: 70 },
    ] satisfies Skill[],
  },
  {
    id: "ai",
    label: "AI / ML",
    description: "Hands-on experimentation across OCR, NLP, analytics, and applied ML.",
    skills: [
      { name: "OCR (Tesseract / OpenCV)", level: 75 },
      { name: "NLP (spaCy / NLTK)", level: 72 },
      { name: "Scikit-learn / ML", level: 68 },
      { name: "Data Analytics", level: 80 },
    ] satisfies Skill[],
  },
];

export const techCloud = [
  "Python",
  "Java",
  "SQL",
  "Spring Boot",
  "ETL / ELT",
  "Data Warehousing",
  "ML",
  "Azure",
  "Git",
  "Data Governance",
  "Data Modeling",
  "OCR",
  "Power BI",
  "Docker",
];

export const experience = [
  {
    role: "Associate Software Engineer (Data)",
    company: "Infostats",
    date: `Oct 2025 – Present (${new Date().getFullYear()})`,
    badge: "Current",
    bullets: [
      "Design and develop Data Marts and Operational Data Stores (ODS) for analytics and reporting.",
      "Develop and maintain ETL/ELT pipelines ensuring robust, high-performance data movement.",
      "Enforce data quality, governance standards, and compliance with security regulations.",
      "Collaborate with stakeholders and provide mentorship to junior engineers and analysts.",
      "Contribute to cloud services integration and AI-related development initiatives.",
    ],
    tags: ["SQL", "ETL/ELT", "Data Modeling", "Python", "Azure", "AI"],
  },
  {
    role: "Java Developer (Intern)",
    company: "Excerpt Technologies, Bangalore",
    date: "Jul - Sep 2024",
    badge: "Internship",
    bullets: [
      "Developed backend services for Music Hub using Spring Boot, improving application performance.",
      "Implemented RESTful APIs streamlining data access and user interactions.",
      "Collaborated with the front-end team to integrate seamless user interfaces.",
    ],
    tags: ["Java", "Spring Boot", "REST API", "MySQL", "Thymeleaf"],
  },
];

export const journeyMilestones = [
  {
    id: "bsc",
    year: "2018",
    eyebrow: "Academic Foundation",
    title: "Bachelor of Science in Computer Science",
    subtitle: "RJS First Grade College, Bangalore",
    description: "Built the fundamentals in Python, SQL, data structures, and databases.",
    detail: "2018 - 2021 | CGPA: 8.20",
  },
  {
    id: "mca",
    year: "2022",
    eyebrow: "Advanced Learning",
    title: "Master of Computer Applications",
    subtitle: "SEA College of Science, Commerce & Arts, Bangalore",
    description: "Deepened the focus on data engineering, cloud computing, ETL, and backend systems.",
    detail: "2022 - 2025 | CGPA: 8.18",
  },
  {
    id: "python-pro",
    year: "2024",
    eyebrow: "Certification",
    title: "OpenEDG Python Professional Certificate",
    subtitle: "Python Institute",
    description: "Added stronger Python validation around applied problem-solving and implementation.",
    detail: "Issued 2024 — Python Institute | Covers advanced Python programming, OOP, modules, and applied problem solving.",
  },
  {
    id: "de-foundations",
    year: "2024",
    eyebrow: "Certification",
    title: "Data Engineering Foundations",
    subtitle: "Astronomer",
    description: "Strengthened data engineering fundamentals and the discipline behind pipeline design.",
    detail: "Issued 2024 — Astronomer | Covers Apache Airflow, DAG design, pipeline orchestration, and data workflow best practices.",
  },
  {
    id: "python-de",
    year: "2024",
    eyebrow: "Certification",
    title: "Python for Data Engineering",
    subtitle: "LinkedIn Learning",
    description: "Expanded the practical Python toolkit for ETL and data workflow development.",
    detail: "Issued 2024 — LinkedIn Learning | Covers Python for data pipelines, file I/O, API consumption, and ETL scripting patterns.",
  },
  {
    id: "intern",
    year: "2024",
    eyebrow: "Industry Experience",
    title: "Java Developer Intern",
    subtitle: "Excerpt Technologies, Bangalore",
    description: "Worked on Music Hub backend services, API implementation, and front-end integration support.",
    detail: "Jul - Sep 2024",
  },
  {
    id: "infostats",
    year: "2025",
    eyebrow: "Current Role",
    title: "Associate Data Engineer",
    subtitle: "Infostats Technologies",
    description:
      "Driving Azure ETL pipelines, Power BI reporting, and faster healthcare data processing with optimized querying.",
    detail: "Oct 2025 - Present | 90% faster processing | 100K+ records/day | 35% query optimization",
  },
];

export const journeyStats = [
  { value: "90%", label: "Faster ETL Processing" },
  { value: "100K+", label: "Records Processed / Day" },
  { value: "35%", label: "Query Performance Boost" },
  { value: "3", label: "Professional Certifications" },
];

export const journeyFocusAreas = [
  "Python & SQL",
  "Azure / ADF / SSIS / Power BI",
  "Docker / CI/CD / Delta Lake",
];

export const projects: Project[] = [
  {
    category: "Full-Stack Application",
    title: "Music Hub",
    description:
      "A full-stack music streaming experience with dashboards, playlist management, subscription payments, and a cleaner backend architecture built to support user flows end to end.",
    outcome:
      "Integrated payments, role-based views, and a polished customer-facing interface around a Spring Boot backend.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "REST API", "Razorpay"],
    images: [
      {
        src: new URL("../../images/Music Hub - Home.png", import.meta.url).href,
        alt: "Music Hub home screen",
      },
      {
        src: new URL("../../images/View Playlists.png", import.meta.url).href,
        alt: "Music Hub playlists view",
      },
      {
        src: new URL("../../images/View Songs - Customer.png", import.meta.url).href,
        alt: "Music Hub customer songs view",
      },
      {
        src: new URL("../../images/Customer Dashboard - Music Application.png", import.meta.url).href,
        alt: "Music Hub customer dashboard",
      },
    ],
    links: [
      { label: "Live Demo", href: "https://musichub-e2rz.onrender.com/", kind: "demo" },
      { label: "GitHub", href: "https://github.com/VISHWANATH2000/MusicHub", kind: "github" },
    ],
  },
  {
    category: "Backend Application",
    title: "Expense Tracker",
    description:
      "A personal finance tracker built with Java and Spring Boot for recording spending, organizing categories, and surfacing quick summaries through a simple Thymeleaf interface.",
    outcome:
      "Focused on clean CRUD flows, practical summaries, and a lightweight full-stack experience using server-rendered views.",
    tech: ["Java", "Spring Boot", "Thymeleaf"],
    images: [
      {
        src: new URL("../../images/Expenses Trakcer main page.png", import.meta.url).href,
        alt: "Expense Tracker dashboard",
      },
      {
        src: new URL("../../images/Expenses Trakcer main page (2).png", import.meta.url).href,
        alt: "Expense Tracker alternate main page",
      },
      {
        src: new URL("../../images/add expense.png", import.meta.url).href,
        alt: "Expense Tracker add expense screen",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/VISHWANATH2000/ExpenseTracker", kind: "github" }],
  },
  {
    category: "Web Application",
    title: "Tax Calculation App",
    description:
      "An interactive tax calculator with real-time computation, step-by-step breakdowns, and a guided dashboard designed around Indian income tax regimes.",
    outcome: "Turns a complex calculation flow into a clearer user journey with instant feedback and digestible outputs.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: [
      {
        src: new URL("../../images/Dashboard - Tax Calculator.png", import.meta.url).href,
        alt: "Tax Calculation App dashboard",
      },
      {
        src: new URL("../../images/Calculate Tax - Tax Calculator.png", import.meta.url).href,
        alt: "Tax Calculation App calculation screen",
      },
      {
        src: new URL("../../images/How It Works - Tax Calculator.png", import.meta.url).href,
        alt: "Tax Calculation App explanation flow",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/VISHWANATH2000/TaxCalculationApp", kind: "github" }],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "SEA College of Science, Commerce & Arts, Bangalore",
    duration: "2022 - 2025",
    cgpa: "8.18",
    courses: ["Java", "Data Structures", "Spring Boot", "MySQL"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "RJS First Grade College, Bangalore",
    duration: "2018 - 2021",
    cgpa: "8.20",
    courses: ["Core Java", "Data Structures", "MySQL"],
  },
];

export const certifications = [
  {
    title: "Data Engineering Foundations Professional Certificate",
    issuer: "Astronomer — LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/f0054f4c2169adf770f8fd64006ef60b3cba369a32a6b86c71b2e61083fcf47c",
  },
  {
    title: "ETL in Python and SQL",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/0bb212361efce65da71dffcb39954821ee314300c4b66a017fd77982827475a0",
  },
  {
    title: "Python for Data Engineering",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/",
  },
  {
    title: "OpenEDG Python Professional Certificate",
    issuer: "Python Institute",
    href: "https://pythoninstitute.org/",
  },
];

export const contactPitch =
  "I'm open to data engineering, backend, and analytics-focused roles where I can build dependable systems, improve data flow, and contribute to strong engineering teams.";

export const contactDetails = [
  { label: "Email", value: personal.email, href: "mailto:vishwanathareddy598@gmail.com" },
  { label: "Phone", value: personal.phone, href: "tel:+917892279940" },
  { label: "Location", value: personal.location },
];

export const contactAvailability = {
  title: "Best Way To Reach Me",
  highlight: "Email first for roles, collaboration, or project conversations.",
  description: "Direct email and LinkedIn usually get the fastest response.",
  signal: "Actively reviewing opportunities.",
};
