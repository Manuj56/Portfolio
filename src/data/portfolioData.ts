export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  bullets: string[]
  github: string
  liveDemo: string
  image: string
}

export interface SkillCategory {
  name: string
  skills: { name: string; level: number; iconName: string }[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string[]
  tags: string[]
}

export interface AchievementItem {
  id: string
  number: number
  suffix?: string
  label: string
  description: string
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  score?: string
  details: string[]
}

export interface CertificateItem {
  id: string
  name: string
  issuer: string
  issueDate: string
  credentialId?: string
  link: string
}

export const personalInfo = {
  name: "Manuj Saxena",
  title: "Full-Stack Software Engineer & AI Developer",
  tagline: "Building high-performance backend architectures and intelligent, LLM-powered applications.",
  avatarPlaceholder: "MS",
  email: "manujsaxena567@gmail.com",
  location: "Mathura, UP, India",
  github: "https://github.com/manuj56",
  linkedin: "https://www.linkedin.com/in/manuj56",
  leetcode: "https://leetcode.com/u/manuj56",
  resumeUrl: "/Manuj_Saxena_Resume.pdf",
}

export const aboutNarrative = {
  text: "I am a final-year Computer Science Engineering student at GLA University, specializing in high-performance backend systems and LLM-powered integrations. Most recently, I developed a production-ready RAG-based Teaching Assistant that performs semantic Q&A over dense educational textbooks with sub-2s response latencies. I thrive on architecting clean APIs, tuning database queries, and connecting AI intelligence to real-world software workflows. My focus is writing clean, scalable code that turns complex system challenges into smooth user experiences.",
  pillars: [
    {
      title: "Backend Excellence",
      description: "Designing RESTful APIs, optimized databases, and secure authentication flows."
    },
    {
      title: "AI & RAG Integrations",
      description: "Leveraging Large Language Models to build semantic search engines and conversational teaching assistants."
    },
    {
      title: "Continuous Learning",
      description: "Actively studying Data Structures, Algorithms, Operating Systems, and contributing to open source."
    }
  ]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 90, iconName: "Code2" },
      { name: "JavaScript", level: 85, iconName: "Terminal" },
      { name: "Python", level: 80, iconName: "FileCode" }
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "MongoDB", level: 85, iconName: "Database" },
      { name: "React.js", level: 80, iconName: "Layout" },
      { name: "Node.js", level: 85, iconName: "Layers" },
      { name: "Express.js", level: 85, iconName: "Server" },
      { name: "REST APIs", level: 90, iconName: "Globe" }
    ]
  },
  {
    name: "AI / ML",
    skills: [
      { name: "LLMs", level: 85, iconName: "Sparkles" },
      { name: "RAG", level: 85, iconName: "Cpu" },
      { name: "Vector Databases", level: 80, iconName: "Database" }
    ]
  },
  {
    name: "Core CS",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, iconName: "Workflow" },
      { name: "OOPs", level: 90, iconName: "Box" },
      { name: "DBMS", level: 85, iconName: "FolderOpen" }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85, iconName: "GitBranch" },
      { name: "VS Code", level: 90, iconName: "Code" }
    ]
  }
]

export const projects: Project[] = [
  {
    id: "ai-lms",
    title: "AI-Powered LMS",
    description: "A full-stack SaaS-level EdTech platform integrating AI, secure payments, and cloud storage.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Gemini AI", "Razorpay", "Cloudinary", "Multer"],
    bullets: [
      "Built full-stack LMS with Gemini AI course search",
      "Secure auth + dashboards via Firebase & MERN",
      "Razorpay payments for course enrollment",
      "Cloudinary-powered media uploads & storage"
    ],
    github: "https://github.com/abhishekofc/AI-Powered-LMS",
    liveDemo: "https://ai-powered-lms-1-6aan.onrender.com/",
    image: "" // TODO: replace with real screenshot from AI-Powered LMS
  },
  {
    id: "rag-ta",
    title: "RAG-Based Teaching Assistant",
    description: "An AI-powered teaching assistant using Retrieval-Augmented Generation (RAG) for context-aware Q&A.",
    tech: ["LLMs", "Vector Databases", "NLP", "React", "Node.js"],
    bullets: [
      "Built RAG-based Q&A using LLMs + vector search",
      "Semantic search via vector embeddings for accurate answers",
      "Reduced hallucinations with optimized retrieval pipeline",
      "Deployed scalable API with sub-2s average response time"
    ],
    github: "https://github.com/manuj56/rag-ta",
    liveDemo: "#",
    image: "" // TODO: replace with real screenshot from RAG Teaching Assistant
  },
  {
    id: "disease-prediction",
    title: "DiagnoAI - Multiple Disease Prediction Model",
    description: "A machine-learning-powered healthcare app allowing users to predict risk levels for diabetes, heart disease, and Parkinson's.",
    tech: ["Python", "Streamlit", "ML Models"],
    bullets: [
      "Achieved 92% accuracy across 3 disease models",
      "Built real-time Streamlit prediction interface",
      "Delivered risk insights via clean, user-friendly UI"
    ],
    github: "https://github.com/manuj56/diagno-ai",
    liveDemo: "#",
    image: "" // TODO: replace with real screenshot from DiagnoAI
  }
]

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Web Development Trainee",
    company: "Coding Blocks",
    location: "Online / Noida, India",
    period: "June 2025 - July 2025",
    description: [
      "Completed a job-oriented industrial training on Full Stack Web Development.",
      "Gained hands-on experience in full-stack development, deployment, and DB management.",
      "Designed and built 'A Smart Bus Booking System' as a capstone project."
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"]
  }
]

export const achievements: AchievementItem[] = [
  {
    id: "ach-1",
    number: 250,
    suffix: "+",
    label: "DSA Coding Problems",
    description: "Solved across LeetCode and other competitive platforms using Java."
  },
  {
    id: "ach-2",
    number: 4,
    suffix: "",
    label: "Projects Built",
    description: "Developed MERN stack applications, ML models, and AI assistants."
  },
  {
    id: "ach-3",
    number: 4,
    suffix: "",
    label: "Professional Certificates",
    description: "Earned certifications from Oracle, DataCamp, and Coding Blocks."
  }
]

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science",
    institution: "GLA University",
    location: "Mathura, UP",
    period: "Sep 2023 – May 2027",
    score: "CGPA: 7.74/10",
    details: [
      "Focused on Full-Stack Development, scalable software architectures, and AI systems.",
      "Relevant coursework: Data Structures & Algorithms, OOPs, Database Management Systems."
    ]
  },
  {
    id: "edu-2",
    degree: "Intermediate (Class XII)",
    institution: "Lucknow Public School",
    location: "Sitapur, UP",
    period: "June 2020 – May 2022",
    score: "Percentage: 75.2%",
    details: [
      "Specialized in Science stream with Physics, Chemistry, Mathematics, and Computer Science."
    ]
  },
  {
    id: "edu-3",
    degree: "High School (Class X)",
    institution: "Lucknow Public School",
    location: "Sitapur, UP",
    period: "Completed: June 2020",
    score: "Percentage: 84.4%",
    details: [
      "Finished high school studies with core subjects in Mathematics and Science."
    ]
  }
]

export const certificates: CertificateItem[] = [
  {
    id: "cert-1",
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    issueDate: "Oct 2025",
    link: "https://drive.google.com/file/d/1q0WNaO9iwQrS0wtCUGRP9exq-ZdPvHEK/view?usp=sharing"
  },
  {
    id: "cert-2",
    name: "Full Stack Web Development",
    issuer: "Coding Blocks & GLA University",
    issueDate: "July 2025",
    link: "https://drive.google.com/file/d/14eiHO3oSZoGgaPqhNMOclMRaIqUon6lP/view?usp=sharing"
  },
  {
    id: "cert-3",
    name: "Introduction to MongoDB in Python",
    issuer: "DataCamp",
    issueDate: "Apr 2026",
    link: "https://drive.google.com/file/d/1PmHj3R_FSlDU5h7p1-1G23id4TtZYmT4/view?usp=sharing"
  },
  {
    id: "cert-4",
    name: "Introduction to R",
    issuer: "DataCamp",
    issueDate: "Apr 2026",
    link: "https://drive.google.com/file/d/1IWhvOOHIfKl7IWMe7VU_hW6qiC5hkW88/view?usp=sharing"
  }
]
