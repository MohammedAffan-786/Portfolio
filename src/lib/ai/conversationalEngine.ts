import profileData from "@/data/portfolio/profile.json";
import educationData from "@/data/portfolio/education.json";
import skillsData from "@/data/portfolio/skills.json";
import projectsData from "@/data/portfolio/projects.json";
import contactData from "@/data/portfolio/contact.json";

export interface ConversationTurn {
  role: "user" | "assistant" | "system";
  content: string;
}

function sanitizeText(text: string): string {
  return text
    // Replace markdown links [text](url) with "text (url)"
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    // Remove markdown symbols: asterisks, hashes, backticks, underscores, tildes
    .replace(/[*#`_~]/g, "")
    // Ensure clean line breaks and spacing
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function generateConversationalResponse(
  userQuery: string,
  history: ConversationTurn[] = []
): string {
  const query = userQuery.toLowerCase().trim();
  const cleanQuery = query.replace(/[?!.,'"]/g, "").trim();

  // 1. GREETINGS
  if (
    cleanQuery === "hi" ||
    cleanQuery === "hello" ||
    cleanQuery === "hey" ||
    cleanQuery === "hey there" ||
    cleanQuery === "good morning" ||
    cleanQuery === "good afternoon" ||
    cleanQuery === "good evening" ||
    cleanQuery.startsWith("hello ") ||
    cleanQuery.startsWith("hi ") ||
    cleanQuery.startsWith("hey ")
  ) {
    return sanitizeText(
      "Hello! I am Affan AI, Mohammed Affan Farooq's portfolio assistant.\n\n" +
      "I am here to answer your questions about Mohammed, his full-stack and AI projects, his technical skills, and how to contact him.\n\n" +
      "How can I help you today?"
    );
  }

  // 2. COURTESY / HOW ARE YOU / THANKS / BYE
  if (
    query.includes("how are you") ||
    query.includes("hows it going") ||
    query.includes("how are things") ||
    cleanQuery === "whats up"
  ) {
    return sanitizeText(
      "I am doing great, thank you for asking! I am ready to help you with any questions about Mohammed's projects, coursework, and technical abilities.\n\n" +
      "What would you like to explore?"
    );
  }

  if (
    cleanQuery === "thank you" ||
    cleanQuery === "thanks" ||
    cleanQuery === "thx" ||
    cleanQuery.includes("appreciate it") ||
    cleanQuery.includes("thank you so much")
  ) {
    return sanitizeText(
      "You are very welcome! If you have any other questions or would like to contact Mohammed directly, you can email him at mohammedaffan971211@gmail.com."
    );
  }

  if (cleanQuery === "bye" || cleanQuery === "goodbye" || cleanQuery.includes("see you")) {
    return sanitizeText(
      "Thank you for visiting Mohammed's portfolio! Feel free to reach out to him on LinkedIn or GitHub anytime. Have a wonderful day!"
    );
  }

  // 3. WHO ARE YOU / CAPABILITIES
  if (
    query.includes("who are you") ||
    query.includes("what are you") ||
    query.includes("what can you do") ||
    query.includes("who made you") ||
    query.includes("what is your name")
  ) {
    return sanitizeText(
      "I am Affan AI, the interactive representative for Mohammed Affan Farooq.\n\n" +
      "I can answer questions regarding:\n" +
      "- His studies in Computer Science at Sri Siddhartha Institute of Technology.\n" +
      "- His engineering skills in Python, JavaScript, C++, React.js, Node.js, Express, MongoDB, and MySQL.\n" +
      "- His systems: DevFlow AI, EduReach, and the AI-Powered Research Engine.\n" +
      "- His availability for software engineering internships and collaboration."
    );
  }

  // 4. WHY HIRE MOHAMMED / STRENGTHS / ADVANTAGES
  if (
    query.includes("why hire") ||
    query.includes("why should") ||
    query.includes("strengths") ||
    query.includes("why choose") ||
    query.includes("what makes him stand out") ||
    query.includes("recommend him")
  ) {
    return sanitizeText(
      "Here is why Mohammed Affan Farooq stands out:\n\n" +
      "1. Strong Computer Science Foundations: He is studying B.E. Computer Science at SSIT Tumakuru, focusing on Data Structures, Algorithms, Object-Oriented Programming, and Databases.\n\n" +
      "2. Practical MERN Stack Engineering: He builds production-style web applications using React.js, Node.js, Express.js, and MongoDB.\n\n" +
      "3. Real AI Application Development: In DevFlow AI, he works on static code analysis and test execution sandboxes. In EduReach, he implements Agentic RAG using Google Gemini.\n\n" +
      "4. Dedicated Learning Mindset: He is committed to hands-on problem solving, clean architectures, and constant self-improvement."
    );
  }

  // 5. INTERNSHIP / JOB AVAILABILITY / REMOTE / RELOCATE
  if (
    query.includes("intern") ||
    query.includes("available") ||
    query.includes("availability") ||
    query.includes("looking for") ||
    query.includes("remote") ||
    query.includes("full time") ||
    query.includes("hire him") ||
    query.includes("can he join")
  ) {
    return sanitizeText(
      "Mohammed is actively open to Software Engineering Internships, full-stack MERN opportunities, and open-source projects.\n\n" +
      "He is a Computer Science undergraduate at SSIT Tumakuru graduating in 2027, and is open to remote and hybrid engineering arrangements.\n\n" +
      "You can contact him directly at mohammedaffan971211@gmail.com or connect with him on LinkedIn at linkedin.com/in/mdaffan1."
    );
  }

  // 6. DEVFLOW AI
  if (
    query.includes("devflow") ||
    query.includes("security platform") ||
    query.includes("code intelligence") ||
    query.includes("code analysis")
  ) {
    return sanitizeText(
      "DevFlow AI is an AI-powered software engineering and security analysis platform currently in development.\n\n" +
      "What it does:\n" +
      "- Analyzes entire code repositories to identify security vulnerabilities and bugs.\n" +
      "- Integrates with GitHub Apps and webhooks for context-aware pull request reviews.\n" +
      "- Runs automated test execution in isolated sandbox environments.\n" +
      "- Employs asynchronous worker pipelines using Redis and BullMQ.\n\n" +
      "Technologies used: React, TypeScript, Express.js, FastAPI, MongoDB, Redis, BullMQ, and Docker.\n\n" +
      "Source code is available on GitHub at github.com/MohammedAffan-786/DevFlow-AI."
    );
  }

  // 7. EDUREACH
  if (
    query.includes("edureach") ||
    query.includes("college chatbot") ||
    query.includes("guidance assistant") ||
    query.includes("counselor")
  ) {
    return sanitizeText(
      "EduReach is an AI-powered college assistant platform currently in development.\n\n" +
      "What it does:\n" +
      "- Helps students find verified answers regarding courses, admissions, fees, and placements.\n" +
      "- Uses an Agentic AI chatbot with knowledge retrieval grounded on institutional documents.\n" +
      "- Integrates an AI voice counselor interface using Vapi.\n" +
      "- Secures student portals with JWT authentication.\n\n" +
      "Technologies used: Python, Node.js, React.js, MongoDB Atlas, Google Gemini, and Vapi.\n\n" +
      "Source code is available on GitHub at github.com/MohammedAffan-786/EduReach-Agentic-College-Chatbot."
    );
  }

  // 8. RESEARCH ENGINE
  if (
    query.includes("research engine") ||
    query.includes("semantic search") ||
    query.includes("qdrant")
  ) {
    return sanitizeText(
      "The AI-Powered Research Engine is an intelligent semantic search platform currently in the concept and planned development stage.\n\n" +
      "The goal is to understand natural-language research questions, index web documents, retrieve context using the Qdrant vector database, and provide answers with verifiable source citations and knowledge graphs.\n\n" +
      "Planned stack: Python, FastAPI, React, PostgreSQL, and Qdrant.\n\n" +
      "Note: This is labeled as a Concept / Planned Development project in line with Mohammed's strict honesty policy."
    );
  }

  // 9. ALL PROJECTS OVERVIEW
  if (
    query.includes("project") ||
    query.includes("what has he built") ||
    query.includes("portfolio") ||
    query.includes("apps")
  ) {
    return sanitizeText(
      "Mohammed's featured engineering projects are:\n\n" +
      "1. DevFlow AI (In Development): Code intelligence and security analysis platform built with React, TypeScript, Express.js, FastAPI, Redis, BullMQ, and Docker.\n\n" +
      "2. EduReach (In Development): Agentic college chatbot and voice guidance assistant built with Python, Node.js, React.js, MongoDB Atlas, and Google Gemini.\n\n" +
      "3. AI-Powered Research Engine (Concept / Planned): Semantic search and RAG platform with knowledge graphs and citations.\n\n" +
      "Would you like to know more about the architecture of any of these?"
    );
  }

  // 10. SPECIFIC SKILLS
  if (query.includes("python")) {
    return sanitizeText(
      "Mohammed uses Python for AI backend engineering, data structures, and automation. In DevFlow AI, Python services perform AST code parsing and static analysis. In EduReach, Python manages LLM orchestration."
    );
  }

  if (query.includes("javascript") || query.includes("typescript") || query.includes("js") || query.includes("ts")) {
    return sanitizeText(
      "JavaScript is Mohammed's main language for full-stack web applications and the MERN stack. He also uses TypeScript for type safety across his architectures, including DevFlow AI."
    );
  }

  if (query.includes("c++") || query.includes("cpp")) {
    return sanitizeText(
      "Mohammed uses C++ for academic problem solving at SSIT Tumakuru, focusing on Object-Oriented Programming, memory management, and algorithmic theory."
    );
  }

  if (query.includes("react") || query.includes("frontend")) {
    return sanitizeText(
      "For frontend engineering, Mohammed uses HTML5, CSS3, React.js, and Tailwind CSS. He builds responsive, accessible, component-based user interfaces."
    );
  }

  if (query.includes("node") || query.includes("express") || query.includes("backend") || query.includes("api")) {
    return sanitizeText(
      "For backend systems, Mohammed builds RESTful APIs with Node.js and Express.js, handling JWT authentication, middleware pipelines, and task queues."
    );
  }

  if (query.includes("database") || query.includes("mongodb") || query.includes("mysql") || query.includes("sql")) {
    return sanitizeText(
      "Mohammed works with both document and relational databases:\n\n" +
      "- MongoDB: NoSQL document database used in EduReach and full-stack MERN projects.\n" +
      "- MySQL: Relational database design, table normalization, and SQL queries."
    );
  }

  if (query.includes("git") || query.includes("docker") || query.includes("postman") || query.includes("tools")) {
    return sanitizeText(
      "Mohammed's tools include Git and GitHub for version control, Postman for API testing, Visual Studio Code for development, and Docker for containerized environments."
    );
  }

  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("stack")
  ) {
    return sanitizeText(
      "Here is a summary of Mohammed's verified technical skills:\n\n" +
      "Languages: Python, JavaScript, C++\n" +
      "Frontend: HTML5, CSS3, React.js\n" +
      "Backend: Node.js, Express.js, REST APIs\n" +
      "Databases: MongoDB, MySQL\n" +
      "AI: Generative AI, LLM-powered applications\n" +
      "Developer Tools: Git, GitHub, Postman, Visual Studio Code"
    );
  }

  // 11. EDUCATION & ACADEMICS
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("ssit") ||
    query.includes("study") ||
    query.includes("degree") ||
    query.includes("tumakuru")
  ) {
    return sanitizeText(
      "Mohammed is pursuing a Bachelor of Engineering (B.E.) in Computer Science and Engineering at Sri Siddhartha Institute of Technology (SSIT) in Tumakuru, Karnataka, for the 2024 to 2027 timeline.\n\n" +
      "His coursework includes Data Structures and Algorithms, Object-Oriented Programming with C++, Database Management Systems, Operating Systems, and Web Application Development."
    );
  }

  if (
    query.includes("cgpa") ||
    query.includes("gpa") ||
    query.includes("marks") ||
    query.includes("grades")
  ) {
    return sanitizeText(
      "Mohammed's CGPA is withheld from public display until officially finalized and published by the university.\n\n" +
      "His practical engineering skills are reflected through his active coursework at SSIT and open-source projects on GitHub."
    );
  }

  // 12. BIO & INTRODUCTION
  if (
    query.includes("who is") ||
    query.includes("tell me about") ||
    query.includes("about mohammed") ||
    query.includes("bio") ||
    query.includes("introduce")
  ) {
    return sanitizeText(
      "Mohammed Affan Farooq is a Computer Science Engineering student at Sri Siddhartha Institute of Technology in Tumakuru, Karnataka (2024 to 2027).\n\n" +
      "He is a MERN stack developer and AI-powered application builder passionate about creating practical software solutions, exploring new development tools, and continuous hands-on learning."
    );
  }

  // 13. CONTACT & SOCIALS
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("reach") ||
    query.includes("phone")
  ) {
    return sanitizeText(
      "You can contact Mohammed through:\n\n" +
      "Email: mohammedaffan971211@gmail.com\n" +
      "LinkedIn: linkedin.com/in/mdaffan1\n" +
      "GitHub: github.com/MohammedAffan-786\n" +
      "Location: Tumakuru, Karnataka, India\n\n" +
      "He welcomes messages regarding software engineering opportunities, internships, and project collaborations."
    );
  }

  // 14. RESUME
  if (query.includes("resume") || query.includes("cv")) {
    return sanitizeText(
      "You can view Mohammed's verified Curriculum Vitae by clicking the Resume button on the portfolio website.\n\n" +
      "It provides a clear breakdown of his academic background at SSIT, verified technical skills, and engineering projects."
    );
  }

  // 15. LOCATION
  if (query.includes("location") || query.includes("where does he live") || query.includes("where is he from")) {
    return sanitizeText(
      "Mohammed lives and studies in Tumakuru, Karnataka, India, where he attends Sri Siddhartha Institute of Technology (SSIT)."
    );
  }

  // 16. NATURAL CONVERSATIONAL RESPONSE TO ANY OTHER TOPIC
  return sanitizeText(
    "Regarding your question about " + userQuery.replace(/[*#`_~]/g, "") + ":\n\n" +
    "Mohammed Affan Farooq is a Computer Science Engineering student at SSIT Tumakuru focused on MERN stack development and AI-powered applications.\n\n" +
    "I can tell you more about:\n" +
    "- His skills in Python, JavaScript, C++, React, Node.js, and databases.\n" +
    "- His projects: DevFlow AI, EduReach, and the AI-Powered Research Engine.\n" +
    "- His academic timeline at SSIT and availability for software internships.\n" +
    "- How to get in touch with him at mohammedaffan971211@gmail.com.\n\n" +
    "Feel free to ask about any specific detail!"
  );
}
