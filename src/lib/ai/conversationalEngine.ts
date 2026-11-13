import profileData from "@/data/portfolio/profile.json";
import educationData from "@/data/portfolio/education.json";
import skillsData from "@/data/portfolio/skills.json";
import projectsData from "@/data/portfolio/projects.json";
import contactData from "@/data/portfolio/contact.json";

export interface ConversationTurn {
  role: "user" | "assistant" | "system";
  content: string;
}

export function cleanText(text: string): string {
  return text
    // Replace markdown links [text](url) with "text (url)"
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    // Remove markdown symbols: asterisks, hashes, backticks, underscores, tildes
    .replace(/[*#`_~]/g, "")
    // Clean excessive blank lines
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function generateConversationalResponse(
  userQuery: string,
  history: ConversationTurn[] = []
): string {
  const query = userQuery.toLowerCase().trim();
  const cleanQuery = query.replace(/[?!.,'"]/g, "").trim();

  // Extract previous topic if this is a short follow up like "tell me more" or "what else"
  const previousAssistantMsg = history
    .filter((m) => m.role === "assistant" && m.content)
    .slice(-1)[0]?.content.toLowerCase() || "";

  // 1. GREETINGS & INTRODUCTIONS
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
    return cleanText(
      "Hello! I am Affan AI, Mohammed Affan Farooq's personal portfolio assistant.\n\n" +
      "I am ready to chat with you about anything regarding Mohammed, his engineering projects, his technical skills, his coursework at SSIT Tumakuru, or his availability for software engineering roles.\n\n" +
      "How can I help you today?"
    );
  }

  // 2. COURTESY / HOW ARE YOU / CASUAL CHAT
  if (
    query.includes("how are you") ||
    query.includes("hows it going") ||
    query.includes("how are things") ||
    cleanQuery === "whats up" ||
    cleanQuery === "sup"
  ) {
    return cleanText(
      "I am doing great, thank you for asking! I am always ready to discuss software engineering, web development, and Mohammed's latest projects.\n\n" +
      "What would you like to talk about?"
    );
  }

  if (
    cleanQuery === "thank you" ||
    cleanQuery === "thanks" ||
    cleanQuery === "thx" ||
    cleanQuery.includes("appreciate it") ||
    cleanQuery.includes("thank you so much")
  ) {
    return cleanText(
      "You are very welcome! If there is anything else you would like to know, or if you would like to connect with Mohammed directly, you can email him at mohammedaffan971211@gmail.com."
    );
  }

  if (cleanQuery === "bye" || cleanQuery === "goodbye" || cleanQuery.includes("see you") || cleanQuery.includes("have a good day")) {
    return cleanText(
      "Thank you for exploring Mohammed Affan Farooq's portfolio! Have a wonderful day, and feel free to reach out to him on LinkedIn or GitHub anytime."
    );
  }

  // 3. WHO ARE YOU / WHAT CAN YOU DO
  if (
    query.includes("who are you") ||
    query.includes("what are you") ||
    query.includes("what can you do") ||
    query.includes("who created you") ||
    query.includes("who built you") ||
    query.includes("what is your purpose")
  ) {
    return cleanText(
      "I am Affan AI, an interactive representative built for Mohammed Affan Farooq's developer portfolio.\n\n" +
      "I can converse with you about:\n" +
      "- Mohammed's background as a Computer Science Engineering student at SSIT Tumakuru.\n" +
      "- His full-stack engineering skills across Python, JavaScript, C++, React.js, Node.js, Express.js, MongoDB, and MySQL.\n" +
      "- His projects: DevFlow AI, EduReach, and the AI-Powered Research Engine.\n" +
      "- His problem-solving approach, career goals, and availability for software internships."
    );
  }

  // 4. FOLLOW-UP QUESTIONS (tell me more, what else, why, explain further)
  if (
    cleanQuery === "tell me more" ||
    cleanQuery === "what else" ||
    cleanQuery === "more details" ||
    cleanQuery === "continue" ||
    cleanQuery === "explain further"
  ) {
    if (previousAssistantMsg.includes("devflow")) {
      return cleanText(
        "To tell you more about DevFlow AI: it addresses one of the biggest friction points in modern engineering teams. When developers push code, DevFlow analyzes the entire repository AST to find edge cases, mocks dependencies, and executes unit tests inside network-restricted Docker containers to verify them before proposing pull request diffs."
      );
    }
    if (previousAssistantMsg.includes("edureach")) {
      return cleanText(
        "To tell you more about EduReach: institutional websites are often fragmented and difficult for students to navigate. EduReach solves this by chunking syllabus documents, admission notices, and placement statistics into MongoDB vector collections, allowing an agentic chatbot and voice counselor to answer queries with factual campus precision."
      );
    }
    return cleanText(
      "Mohammed is driven by hands-on engineering. Beyond his college coursework in data structures and operating systems, he spends his time architecting modular backend services, building responsive React interfaces, and integrating modern AI tools to solve practical problems."
    );
  }

  // 5. RECRUITER & HIRING QUESTIONS: Why hire Mohammed? What are his strengths?
  if (
    query.includes("why hire") ||
    query.includes("why should") ||
    query.includes("strengths") ||
    query.includes("why choose") ||
    query.includes("what makes him stand out") ||
    query.includes("why him") ||
    query.includes("what makes him special")
  ) {
    return cleanText(
      "Here is why Mohammed Affan Farooq is a strong candidate for engineering teams:\n\n" +
      "1. Solid Computer Science Foundations: Grounded in core engineering principles at SSIT Tumakuru, including Data Structures, Algorithms, Object-Oriented Programming, and Databases.\n\n" +
      "2. Hands-on Full-Stack Capability: He builds end-to-end web applications with the MERN stack (MongoDB, Express, React, Node.js) and Python.\n\n" +
      "3. Practical AI Engineering: Rather than treating AI as a novelty, he explores how to integrate LLMs into real software architectures, as seen in DevFlow AI and EduReach.\n\n" +
      "4. Disciplined Work Ethic: He values clean code, genuine engineering progress, and continuous learning."
    );
  }

  // 6. INTERNSHIP / JOB AVAILABILITY / REMOTE WORK / RELOCATION
  if (
    query.includes("intern") ||
    query.includes("available") ||
    query.includes("availability") ||
    query.includes("looking for a job") ||
    query.includes("full time") ||
    query.includes("part time") ||
    query.includes("can he join") ||
    query.includes("remote") ||
    query.includes("relocate")
  ) {
    return cleanText(
      "Mohammed is actively looking for Software Engineering Internships, MERN and Full-Stack developer positions, and collaborative open-source projects.\n\n" +
      "He is currently in his undergraduate studies at SSIT Tumakuru graduating in 2027, and is open to remote, hybrid, and project-based opportunities.\n\n" +
      "You can reach out directly via email at mohammedaffan971211@gmail.com or via LinkedIn at linkedin.com/in/mdaffan1."
    );
  }

  // 7. PROBLEM SOLVING / CODING STYLE / WORK ETHIC / PHILOSOPHY
  if (
    query.includes("problem solving") ||
    query.includes("coding style") ||
    query.includes("philosophy") ||
    query.includes("mindset") ||
    query.includes("how does he learn") ||
    query.includes("approach")
  ) {
    return cleanText(
      "Mohammed's engineering approach is centered on first principles and practical building:\n\n" +
      "- Understand systems from the ground up: He is curious about how compilers parse ASTs, how databases index queries, and how container isolation works.\n\n" +
      "- Hands-on validation: He believes the best way to master a technology is to build a real working project with it rather than just following tutorials.\n\n" +
      "- Clean and maintainable code: He emphasizes modular structure, strict type contracts, and sensible error handling."
    );
  }

  // 8. CAREER GOALS / INTERESTS / HOBBIES
  if (
    query.includes("career") ||
    query.includes("goals") ||
    query.includes("aspirations") ||
    query.includes("future") ||
    query.includes("hobbies") ||
    query.includes("interests") ||
    query.includes("free time")
  ) {
    return cleanText(
      "Mohammed is focused on becoming a skilled software engineer with deep expertise in scalable full-stack web applications and AI-driven developer systems.\n\n" +
      "In his free time, he enjoys exploring emerging developer tools, experimenting with local open-weights AI models, studying distributed system design, and building open-source projects."
    );
  }

  // 9. DEVFLOW AI PROJECT
  if (
    query.includes("devflow") ||
    query.includes("security platform") ||
    query.includes("code analysis") ||
    query.includes("ast")
  ) {
    return cleanText(
      "DevFlow AI is an AI-powered software engineering and security analysis platform currently in development.\n\n" +
      "What it does:\n" +
      "- Analyzes entire codebases to identify security vulnerabilities and logic bugs.\n" +
      "- Employs Abstract Syntax Tree (AST) parsing for static code analysis.\n" +
      "- Generates automated unit tests and executes them inside isolated Docker sandbox containers.\n" +
      "- Integrates with GitHub Apps to provide context-aware pull request code reviews.\n\n" +
      "Tech stack: React, TypeScript, Express.js, FastAPI, MongoDB, Redis, BullMQ, and Docker.\n\n" +
      "You can inspect the codebase on GitHub at github.com/MohammedAffan-786/DevFlow-AI."
    );
  }

  // 10. EDUREACH PROJECT
  if (
    query.includes("edureach") ||
    query.includes("college chatbot") ||
    query.includes("college assistant") ||
    query.includes("voice counselor") ||
    query.includes("rag")
  ) {
    return cleanText(
      "EduReach is an AI-powered college guidance assistant platform currently in development.\n\n" +
      "What it does:\n" +
      "- Provides conversational assistance to students seeking verified details about college courses, admissions, fees, and placements.\n" +
      "- Uses an Agentic RAG architecture grounded on official institutional knowledge bases.\n" +
      "- Integrates an AI voice counselor interface using Vapi.\n" +
      "- Provides secure student portal endpoints with JWT authentication.\n\n" +
      "Tech stack: Python, Node.js, React.js, MongoDB Atlas, Google Gemini, and Vapi.\n\n" +
      "You can inspect the codebase on GitHub at github.com/MohammedAffan-786/EduReach-Agentic-College-Chatbot."
    );
  }

  // 11. AI-POWERED RESEARCH ENGINE
  if (
    query.includes("research engine") ||
    query.includes("semantic search") ||
    query.includes("qdrant")
  ) {
    return cleanText(
      "The AI-Powered Research Engine is an intelligent semantic search platform in the concept and planned development phase.\n\n" +
      "The goal is to understand natural-language research questions, index web pages and documents, retrieve context using the Qdrant vector database, and generate answers with verifiable source citations and knowledge graphs.\n\n" +
      "Planned stack: Python, FastAPI, React, PostgreSQL, and Qdrant.\n\n" +
      "Note: Following Mohammed's strict honesty policy, this project is classified as Concept / Planned Development and is not represented as completed."
    );
  }

  // 12. GENERAL PROJECTS INQUIRY
  if (
    query.includes("project") ||
    query.includes("what has he built") ||
    query.includes("portfolio") ||
    query.includes("apps")
  ) {
    return cleanText(
      "Mohammed's featured engineering projects are:\n\n" +
      "1. DevFlow AI (In Development): Autonomous code intelligence and security analysis platform built with React, TypeScript, Express.js, FastAPI, Redis, BullMQ, and Docker.\n\n" +
      "2. EduReach (In Development): Agentic college chatbot and voice guidance assistant built with Python, Node.js, React.js, MongoDB Atlas, and Google Gemini.\n\n" +
      "3. AI-Powered Research Engine (Concept / Planned): Semantic search and RAG platform with knowledge graphs and verifiable citations.\n\n" +
      "Which of these projects would you like to explore in more detail?"
    );
  }

  // 13. SPECIFIC SKILL QUESTIONS
  if (query.includes("python")) {
    return cleanText(
      "Mohammed uses Python for AI backend engineering, data structures, and automation. In DevFlow AI, Python services perform AST code parsing and static analysis. In EduReach, Python manages LLM orchestration."
    );
  }

  if (query.includes("javascript") || query.includes("typescript") || query.includes("js") || query.includes("ts")) {
    return cleanText(
      "JavaScript is Mohammed's main language for full-stack web applications and the MERN stack. He also uses TypeScript for type safety across his architectures, including DevFlow AI."
    );
  }

  if (query.includes("c++") || query.includes("cpp")) {
    return cleanText(
      "Mohammed uses C++ for academic problem solving at SSIT Tumakuru, focusing on Object-Oriented Programming, memory management, and algorithmic theory."
    );
  }

  if (query.includes("react") || query.includes("frontend") || query.includes("tailwind") || query.includes("css") || query.includes("html")) {
    return cleanText(
      "For frontend engineering, Mohammed uses HTML5, CSS3, React.js, and Tailwind CSS. He builds responsive, accessible, component-based user interfaces with clean state management."
    );
  }

  if (query.includes("node") || query.includes("express") || query.includes("backend") || query.includes("api") || query.includes("rest")) {
    return cleanText(
      "For backend systems, Mohammed builds RESTful APIs with Node.js and Express.js, handling JWT authentication, middleware pipelines, and task queues."
    );
  }

  if (query.includes("database") || query.includes("mongodb") || query.includes("mysql") || query.includes("sql")) {
    return cleanText(
      "Mohammed works with both document and relational databases:\n\n" +
      "- MongoDB: NoSQL document database used in EduReach and full-stack MERN projects.\n" +
      "- MySQL: Relational database design, table normalization, and SQL queries."
    );
  }

  if (query.includes("git") || query.includes("docker") || query.includes("postman") || query.includes("tools") || query.includes("github")) {
    return cleanText(
      "Mohammed's developer toolkit includes Git and GitHub for version control, Postman for API testing, Visual Studio Code for development, and Docker for containerized environments."
    );
  }

  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("stack")
  ) {
    return cleanText(
      "Here is a summary of Mohammed's verified technical skills:\n\n" +
      "Languages: Python, JavaScript, C++\n" +
      "Frontend: HTML5, CSS3, React.js\n" +
      "Backend: Node.js, Express.js, REST APIs\n" +
      "Databases: MongoDB, MySQL\n" +
      "AI: Generative AI, LLM-powered applications\n" +
      "Developer Tools: Git, GitHub, Postman, Visual Studio Code"
    );
  }

  // 14. EDUCATION / COLLEGE / DEGREE
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("ssit") ||
    query.includes("study") ||
    query.includes("degree") ||
    query.includes("university") ||
    query.includes("tumakuru")
  ) {
    return cleanText(
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
    return cleanText(
      "Mohammed's CGPA is withheld from public display until officially finalized and published by the university.\n\n" +
      "His practical engineering skills are reflected through his active coursework at SSIT and open-source projects on GitHub."
    );
  }

  // 15. CONTACT & SOCIALS
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("reach") ||
    query.includes("message") ||
    query.includes("phone")
  ) {
    return cleanText(
      "You can contact Mohammed through:\n\n" +
      "Email: mohammedaffan971211@gmail.com\n" +
      "LinkedIn: linkedin.com/in/mdaffan1\n" +
      "GitHub: github.com/MohammedAffan-786\n" +
      "Location: Tumakuru, Karnataka, India\n\n" +
      "He welcomes messages regarding software engineering opportunities, internships, and project collaborations."
    );
  }

  // 16. RESUME
  if (query.includes("resume") || query.includes("cv")) {
    return cleanText(
      "You can view Mohammed's verified Curriculum Vitae by clicking the Resume button on the portfolio website.\n\n" +
      "It provides a clear breakdown of his academic background at SSIT, verified technical skills, and engineering projects."
    );
  }

  // 17. LOCATION
  if (query.includes("location") || query.includes("where does he live") || query.includes("where is he from")) {
    return cleanText(
      "Mohammed lives and studies in Tumakuru, Karnataka, India, where he attends Sri Siddhartha Institute of Technology (SSIT)."
    );
  }

  // 18. NATURAL CONVERSATIONAL RESPONSE TO ANY OTHER TOPIC
  return cleanText(
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
