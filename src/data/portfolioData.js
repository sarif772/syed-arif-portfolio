/**
 * Centralized Portfolio Data for Syed Arif Hussain
 * Edit this single file to update any information across the entire website.
 */

import profileImg from '../assets/profile.jpg';

export const personalInfo = {
  name: "Syed Arif Hussain",
  typingRoles: [
    "Generative AI Engineer",
    "Agentic AI Builder",
    "NLP & Computer Vision Enthusiast",
    "AI Researcher",
  ],
  tagline:
    "Final-year BS Artificial Intelligence student building practical AI systems for healthcare, agriculture and intelligent web applications.",
  bio: "Final-year BS Artificial Intelligence student at The Islamia University of Bahawalpur (CGPA 3.50/4.00) with hands-on experience in Generative AI, LLMs, RAG, Agentic AI, NLP, Computer Vision and Machine Learning. Built practical AI systems for agriculture, healthcare, conversational assistance and intelligent web applications. Research interests: generative and agentic AI, intelligent decision-making, multilingual and multimodal AI, responsible AI. Aims to pursue graduate research on AI agents capable of reasoning, planning, tool use and autonomous task execution for real-world applications.",
  location: "Skardu, Gilgit-Baltistan, Pakistan",
  email: "sarifhussaini772@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/syed-arif-hussain-942748305",
    github: "https://github.com/syedarifhussain",
    email: "mailto:sarifhussaini772@gmail.com",
  },
  cvUrl: "/Syed_Arif_Hussain_CV.pdf",
  profileImage: profileImg,
  stats: [
    { label: "Academic CGPA", value: "3.50", sub: "/4.00", icon: "GraduationCap" },
    { label: "AI & Full-Stack Projects", value: "6", sub: "+", icon: "Code2" },
    { label: "Research Paper", value: "1", sub: "Under Review", icon: "FileText" },
    { label: "Industry Certified", value: "Pearson", sub: "VUE Python", icon: "Award" },
  ],
};

export const aboutHighlights = [
  {
    title: "Agentic AI & Autonomy",
    desc: "Designing autonomous multi-agent loops with goal decomposition, dynamic tool use, memory architectures, and self-reflection.",
    icon: "Bot",
  },
  {
    title: "Multimodal & Multilingual AI",
    desc: "Bridging vision, speech, and low-resource languages (Urdu and Balti context) with high-efficiency transformer architectures.",
    icon: "Network",
  },
  {
    title: "Neuro-Symbolic Reasoning",
    desc: "Investigating LLM fallibility, logic-grounded verification, and deterministic constraints for safety-critical policy decisions.",
    icon: "BrainCircuit",
  },
  {
    title: "Impact-Driven Deployment",
    desc: "Translating cutting-edge machine learning into real-world applications in mental health triage, agriculture, and high-altitude tourism.",
    icon: "Sparkles",
  },
];

export const education = {
  degree: "BS Artificial Intelligence",
  institution: "The Islamia University of Bahawalpur",
  period: "Jan 2023 – Jan 2027 (expected)",
  cgpa: "3.50 / 4.00",
  status: "Final Year Student",
  location: "Bahawalpur, Punjab, Pakistan",
  majorSubjects: [
    "Artificial Intelligence",
    "Programming for AI (Python)",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Generative AI",
    "Data Science",
    "Database Systems",
    "Computer Architecture",
    "Operating Systems",
    "Information Security",
    "Software Engineering",
  ],
};

export const researchInterests = [
  {
    title: "Generative AI & LLMs",
    description:
      "Fine-tuning open weights, context retrieval synthesis, alignment, and parameter-efficient prompt architectures.",
    icon: "Cpu",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Agentic AI & Autonomous Systems",
    description:
      "Autonomous agents capable of multi-step planning, reflective tool utilization, agent-to-agent collaboration, and execution.",
    icon: "Bot",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Intelligent Decision-Making & Planning",
    description:
      "Neuro-symbolic verification, chain-of-thought calibration, and logic-grounded decision models for high-stakes domains.",
    icon: "GitBranch",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "NLP & Conversational AI",
    description:
      "Multilingual dialogues, retrieval-augmented generation (RAG), intent classification, and low-resource linguistic adaptation.",
    icon: "MessageSquare",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "AI for Healthcare & Mental Health",
    description:
      "Emotion-aware crisis triage, clinical knowledge grounding, empathetic dialogue generation, and responsible safety rails.",
    icon: "HeartPulse",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI for Agriculture & Decision-Support",
    description:
      "Computer vision for localized crop-pathogen diagnostics, weather-aware harvest guidance, and farmer mobile assistants.",
    icon: "Sprout",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Computer Vision & Disease Detection",
    description:
      "Deep convolutional networks, visual transformers, semantic segmentation, and edge-device inference for diagnostic imagery.",
    icon: "Scan",
    gradient: "from-teal-500 to-cyan-600",
  },
];

export const featuredProjects = [
  {
    id: "safemind-ai",
    title: "SafeMind AI – RAG-Based Mental Health Support Assistant",
    subtitle: "Final Year Project (FYP)",
    badge: "Final Year Project",
    period: "2026",
    category: "GenAI",
    featured: true,
    description:
      "RAG-based GenAI mental-health assistant using Google Colab and Hugging Face, with a vetted knowledge base synthesized from WHO guidelines and public mental-health resources.",
    longDescription:
      "Features multilingual conversational support, medical Q&A grounded strictly in the knowledge base, voice interaction (speech input/output), emotion detection, and real-time crisis-risk detection.",
    researchDirection:
      "Safety-aware, multimodal AI for accessible mental-health support, crisis prevention and therapist-support systems.",
    tags: [
      "Generative AI",
      "LLMs",
      "RAG",
      "NLP",
      "Speech AI",
      "Emotion Detection",
      "Google Colab",
      "Hugging Face",
    ],
    link: "https://lnkd.in/dc6j_Csb",
    highlights: [
      "Multilingual conversational support & medical Q&A",
      "Grounded in verified WHO mental health literature",
      "Full voice interaction (speech input & output)",
      "Real-time emotion & crisis-risk detection",
    ],
  },
  {
    id: "agribot",
    title: "Agribot – AI-Based Multilingual Agricultural Assistant",
    subtitle: "Research & Practical AI Initiative",
    badge: "Active Research",
    period: "Jun 2026 – Present",
    category: "GenAI",
    featured: true,
    description:
      "Answers agriculture queries in multiple languages including Urdu, combining GenAI and Computer Vision for crop-disease detection and decision support for farmers.",
    longDescription:
      "A dual-engine platform combining an Urdu-capable conversational LLM with a computer vision pipeline trained on crop pathology. Empowers rural farmers with rapid diagnostic feedback directly from field photos.",
    researchDirection:
      "Multimodal localized AI systems delivering high-reliability agronomic diagnostics under low-bandwidth rural conditions.",
    tags: [
      "Generative AI",
      "Multilingual NLP",
      "Computer Vision",
      "Decision Support",
      "Urdu NLP",
      "PyTorch",
    ],
    link: "https://github.com/placeholder/agribot",
    highlights: [
      "Bilingual & multilingual queries including Urdu",
      "Computer vision for visual leaf disease detection",
      "Data-driven agronomic decision support",
      "Actionable treatment suggestions for smallholder farmers",
    ],
  },
];

export const otherProjects = [
  {
    id: "crystal-mountain-lodge",
    title: "Crystal Mountain Lodge, Skardu",
    subtitle: "Online Booking System with AI Agent",
    period: "Sep 2026",
    category: "Web",
    description:
      "Online booking system with AI agent, featuring a RAG-based support agent to assist visitors with custom high-altitude itineraries and direct bookings.",
    tags: ["React.js", "Node.js", "RAG Agent", "Firebase", "Hospitality AI"],
    link: "https://crystal-mountain-lodge.web.app",
    featured: false,
  },
  {
    id: "railsa-hotel",
    title: "Railsa Hotel & Event Management Complex, Skardu",
    subtitle: "Full-Stack Enterprise Booking System",
    period: "Mar 2026",
    category: "Web",
    description:
      "Full-stack booking system with React + Node.js and an embedded RAG customer support agent for room reservations and event banquet coordination.",
    tags: ["React.js", "Node.js", "Express", "RAG Support Agent", "REST API"],
    link: "https://railsa-skardu.web.app",
    featured: false,
  },
  {
    id: "pearl-of-skardu",
    title: "Pearl of Skardu Resort & Restaurant",
    subtitle: "AI-Integrated Booking & Dining System",
    period: "Oct 2025",
    category: "Web",
    description:
      "AI-integrated booking system featuring a retrieval-augmented concierge that provides round-the-clock room reservations and local travel guidance.",
    tags: ["React.js", "Node.js", "AI Assistant", "RAG", "Tailwind CSS"],
    link: "https://pearlofskarduresort.web.app",
    featured: false,
  },
  {
    id: "gas-detection-system",
    title: "Gas Detection and Alert System",
    subtitle: "Embedded Hardware Sensor IoT Platform",
    period: "Mar 2024",
    category: "Hardware",
    description:
      "C++ system with hardware sensors for real-time hazardous-gas monitoring, threshold analysis, and autonomous acoustic/remote emergency alerts.",
    tags: ["C++", "Hardware Sensors", "Microcontroller", "Real-Time Monitoring", "IoT", "Safety"],
    link: "https://github.com/placeholder/gas-detection-alert",
    featured: false,
  },
];

export const publications = [
  {
    id: "paper-1",
    title:
      "Locating LLM fallibility in a neuro-symbolic public-benefits eligibility system",
    authors: [
      { name: "Asghar Hussain", isPrimary: false },
      { name: "Shairbaz Ali", isPrimary: false },
      { name: "Mustafa Ali Hakeemi", isPrimary: false },
      { name: "Syed Arif Hussain", isPrimary: true },
      { name: "Nasrullah", isPrimary: false },
      { name: "Manzoor Hussain", isPrimary: false },
    ],
    status: "Under Peer Review",
    venue: "The Journal of Supercomputing",
    year: "2026",
    type: "Journal Article",
    abstract:
      "Investigates the failure modes and hallucinatory boundary conditions of state-of-the-art Large Language Models when applied to rule-governed statutory reasoning within public-benefit eligibility determination. Proposes a neuro-symbolic diagnostic benchmark comparing pure parametric LLM inference against formal first-order logic constraints, locating critical semantic drift patterns and prescribing hybrid verification mechanisms for trustworthy public AI administration.",
    keywords: [
      "Neuro-Symbolic AI",
      "LLM Fallibility",
      "Statutory Reasoning",
      "Public-Benefit Eligibility",
      "Trustworthy AI",
    ],
  },
];

export const skillsData = {
  aiMl: {
    category: "AI, Machine Learning & Agentic Systems",
    skills: [
      { name: "Generative AI", level: "Advanced", icon: "Sparkles" },
      { name: "LLMs (Large Language Models)", level: "Advanced", icon: "Cpu" },
      { name: "Agentic AI & Multi-Agent Loops", level: "Advanced", icon: "Bot" },
      { name: "RAG (Retrieval-Augmented Gen)", level: "Advanced", icon: "Database" },
      { name: "Machine Learning", level: "Proficient", icon: "TrendingUp" },
      { name: "Deep Learning", level: "Proficient", icon: "Network" },
      { name: "Natural Language Processing (NLP)", level: "Advanced", icon: "MessageSquare" },
      { name: "Computer Vision", level: "Proficient", icon: "Eye" },
      { name: "Prompt Engineering", level: "Expert", icon: "Terminal" },
      { name: "LLM API Integration", level: "Advanced", icon: "Code2" },
    ],
  },
  programming: {
    category: "Programming & Query Languages",
    skills: [
      { name: "Python", level: "Certified / Advanced", icon: "FileCode" },
      { name: "C++", level: "Proficient", icon: "Cpu" },
      { name: "SQL", level: "Proficient", icon: "Database" },
      { name: "HTML5", level: "Proficient", icon: "Layout" },
      { name: "CSS3 / Tailwind", level: "Proficient", icon: "Palette" },
    ],
  },
  webTools: {
    category: "Frameworks, Libraries & Tools",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Django (basic)", level: "Familiar", icon: "Layers" },
      { name: "Streamlit", level: "Advanced", icon: "Activity" },
      { name: "Selenium (basic)", level: "Familiar", icon: "Crosshair" },
      { name: "Web Scraping", level: "Proficient", icon: "Globe" },
      { name: "Git & GitHub", level: "Proficient", icon: "GitBranch" },
      { name: "Google Colab", level: "Advanced", icon: "Cloud" },
      { name: "Hugging Face", level: "Advanced", icon: "Box" },
    ],
  },
  softSkills: {
    category: "Research, Collaboration & Leadership",
    skills: [
      { name: "Problem Solving", icon: "Lightbulb" },
      { name: "Critical Thinking", icon: "Compass" },
      { name: "Technical Communication", icon: "Radio" },
      { name: "Leadership", icon: "Award" },
      { name: "Time Management", icon: "Clock" },
      { name: "Entrepreneurship", icon: "Rocket" },
      { name: "Interdisciplinary Teamwork", icon: "Users" },
    ],
  },
};

export const certifications = [
  {
    title: "Python Certification",
    issuer: "Pearson VUE / Certiport",
    issueDate: "19 Jan 2026",
    validity: "Valid 5 Years (until Jan 2031)",
    credentialType: "Global Industry Standard",
    description:
      "Rigorous industry-standard certification verifying mastery in algorithmic problem solving, object-oriented design, data structures, and Python programming fundamentals.",
    badge: "Official Global Credential",
  },
  {
    title: "Face Detection with OpenCV in Python",
    issuer: "Great Learning",
    issueDate: "May 2024",
    validity: "Lifetime",
    credentialType: "Computer Vision Specialization",
    description:
      "Trained in real-time visual feature extraction, Haar Cascades, image transformations, and edge detection pipelines using OpenCV.",
    badge: "Vision AI",
  },
  {
    title: "AI Fundamentals",
    issuer: "Great Learning",
    issueDate: "Apr 2024",
    validity: "Lifetime",
    credentialType: "Foundational AI",
    description:
      "Covered neural architecture basics, search heuristics, probability modeling, and intelligent agent fundamentals.",
    badge: "Foundations",
  },
  {
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    issueDate: "Apr 2024",
    validity: "Lifetime",
    credentialType: "Machine Learning",
    description:
      "Hands-on predictive modeling, data preprocessing, regression, classification algorithms, and evaluation metrics using NumPy, Pandas, and Scikit-Learn.",
    badge: "Applied ML",
  },
];

export const training = [
  {
    title: "Generative & Agentic AI Training and Hackathon",
    organization: "Pak Angels",
    period: "23 Aug – 5 Oct 2026",
    duration: "6 Weeks Intensive",
    description:
      "Deep exploration of cutting-edge Generative AI, autonomous agentic loops, multi-agent systems coordination, and AI workflow automation.",
    competencies: [
      "Agentic AI Architecture",
      "Multi-Agent Systems",
      "Workflow Automation",
      "Advanced RAG & Vector Stores",
      "Hackathon Prototype Development",
    ],
  },
  {
    title: "Advanced Python Programming & Applications",
    organization: "NAVTTC (National Vocational and Technical Training Commission)",
    period: "5 Mar – 4 Jun 2025",
    duration: "3 Months Government Program",
    description:
      "Comprehensive advanced training program focusing on enterprise software architecture, asynchronous paradigms, database connectivity, and backend API engineering.",
    competencies: [
      "Advanced Algorithmic Design",
      "Database Integration & ORM",
      "API Development",
      "Software Engineering Best Practices",
    ],
  },
];

export const conferences = [
  {
    title: "3rd Artificial Intelligence Expo & Seminar",
    role: "Participant & Robotics Workshop Attendee",
    host: "The Islamia University of Bahawalpur (IUB)",
    date: "30 May 2024",
    highlights: [
      "Attended keynote sessions on Generative AI, Robotics and Industrial IoT",
      "Participated in hands-on robotics and sensor integration workshop",
      "Engaged in technical discussions with visiting academic researchers and industry practitioners",
    ],
  },
];

export const languages = [
  {
    name: "Balti",
    proficiency: "Native",
    percent: 100,
    note: "Mother tongue, spoken across Baltistan region",
  },
  {
    name: "Urdu",
    proficiency: "Fluent",
    percent: 100,
    note: "National language; utilized in multilingual NLP research and Agribot project",
  },
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    percent: 90,
    note: "Academic writing, international research publication, and technical discourse",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Training", href: "#training" },
  { name: "Conferences", href: "#conferences" },
  { name: "Languages", href: "#languages" },
  { name: "Contact", href: "#contact" },
];
