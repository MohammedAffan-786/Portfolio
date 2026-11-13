import profileData from "@/data/portfolio/profile.json";
import educationData from "@/data/portfolio/education.json";
import skillsData from "@/data/portfolio/skills.json";
import projectsData from "@/data/portfolio/projects.json";
import contactData from "@/data/portfolio/contact.json";

export function generateKnowledgeResponse(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();

  // 1. Inquiries about Mohammed's identity / background / bio
  if (
    query.includes("who is") ||
    query.includes("tell me about") ||
    query.includes("about mohammed") ||
    query.includes("introduce") ||
    query.includes("bio") ||
    query.includes("profile")
  ) {
    return (
      `### About Mohammed Affan Farooq\n\n` +
      `**Mohammed Affan** is a **Computer Science Engineering student** at **Sri Siddhartha Institute of Technology (SSIT)** in Tumakuru, Karnataka (2024–2027).\n\n` +
      `* **Professional Focus:** MERN Stack Development & AI-Powered Applications.\n` +
      `* **Core Philosophy:** Continuous learning and practical, hands-on engineering to build meaningful systems.\n` +
      `* **Location:** Tumakuru, Karnataka, India.\n` +
      `* **Primary Projects:** DevFlow AI, EduReach, and the AI-Powered Research Engine.\n\n` +
      `Would you like me to explain one of his featured projects or break down his technical skill stack?`
    );
  }

  // 2. DevFlow AI architecture / details
  if (query.includes("devflow") || query.includes("security platform") || query.includes("code intelligence")) {
    const devflow = projectsData.find((p) => p.id === "devflow-ai");
    return (
      `### DevFlow AI — Code Intelligence & Security Platform\n\n` +
      `**Status:** In Development\n\n` +
      `**Overview:** ${devflow?.overview}\n\n` +
      `#### Key Implemented Capabilities:\n` +
      `- Repository-level code & static AST analysis\n` +
      `- AI-assisted defect and security vulnerability detection\n` +
      `- Asynchronous task queues via Redis & BullMQ\n` +
      `- Isolated container execution environments via Docker\n` +
      `- GitHub Apps and PR webhook reviews\n\n` +
      `**Technology Stack:** React, TypeScript, Express.js, FastAPI, MongoDB, Redis, BullMQ, Docker.\n\n` +
      `*Repository:* [github.com/MohammedAffan-786/DevFlow-AI](https://github.com/MohammedAffan-786/DevFlow-AI)`
    );
  }

  // 3. EduReach inquiries
  if (query.includes("edureach") || query.includes("college assistant") || query.includes("chatbot") || query.includes("voice counselor")) {
    const edureach = projectsData.find((p) => p.id === "edureach");
    return (
      `### EduReach — Agentic College Assistance Platform\n\n` +
      `**Status:** In Development\n\n` +
      `**Overview:** ${edureach?.overview}\n\n` +
      `#### Solved Problem:\n` +
      `Prospective and current college students often struggle to locate verified syllabus, fee, admission, and placement data across dispersed college portals.\n\n` +
      `#### Architecture Highlights:\n` +
      `- Agentic AI assistant with tool-calling capabilities\n` +
      `- Knowledge retrieval grounded on college knowledge base\n` +
      `- Institutional queries for courses, fees, and placements\n` +
      `- AI voice counselor integration with Vapi\n` +
      `- Secure Node.js & Express API with JWT authentication\n\n` +
      `**Technology Stack:** Python, Node.js, React.js, MongoDB Atlas, Google Gemini, Vapi.\n\n` +
      `*Repository:* [github.com/MohammedAffan-786/EduReach-Agentic-College-Chatbot](https://github.com/MohammedAffan-786/EduReach-Agentic-College-Chatbot)`
    );
  }

  // 4. AI-Powered Research Engine
  if (query.includes("research engine") || query.includes("semantic search") || query.includes("qdrant") || query.includes("rag")) {
    return (
      `### AI-Powered Research Engine\n\n` +
      `**Status:** Concept / Planned Development *(Not yet built or tested)*\n\n` +
      `**Overview:** An intelligent research platform designed to process natural-language questions rather than relying only on literal keyword matching.\n\n` +
      `#### Proposed Architecture:\n` +
      `- Semantic search using natural-language embeddings\n` +
      `- Web and document indexing pipeline\n` +
      `- Qdrant vector database for fast similarity retrieval\n` +
      `- Source citations for verifiable research claims\n` +
      `- Knowledge graph for exploring relationships between academic topics\n\n` +
      `**Proposed Stack:** Python, FastAPI, React, PostgreSQL, Qdrant.`
    );
  }

  // 5. Inquiries about projects in general
  if (query.includes("project") || query.includes("what has he built") || query.includes("works") || query.includes("portfolio")) {
    return (
      `### Mohammed's Featured Engineering Projects\n\n` +
      `1. **DevFlow AI** *(In Development)*: Autonomous code intelligence & security vulnerability analysis platform. Built with React, TypeScript, Express, FastAPI, Redis, BullMQ, and Docker.\n` +
      `2. **EduReach** *(In Development)*: Agentic college assistant with knowledge retrieval and AI voice guidance. Built with React, Node.js, MongoDB Atlas, and Google Gemini.\n` +
      `3. **AI-Powered Research Engine** *(Concept / Planned)*: Semantic search and RAG platform with knowledge graph relationships and source citations.\n\n` +
      `Which of these systems would you like to explore in more detail?`
    );
  }

  // 6. Inquiries about skills / technologies / tech stack
  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("stack") ||
    query.includes("language") ||
    query.includes("frontend") ||
    query.includes("backend") ||
    query.includes("database") ||
    query.includes("tools")
  ) {
    return (
      `### Mohammed's Verified Technical Competencies\n\n` +
      `* **Programming Languages:** Python, JavaScript (ES6+), C++\n` +
      `* **Frontend Engineering:** HTML5, CSS3, React.js (Basic)\n` +
      `* **Backend Development:** Node.js, Express.js, RESTful API Design\n` +
      `* **Databases:** MongoDB (NoSQL), MySQL (Relational)\n` +
      `* **AI & Generative AI:** Generative AI integrations, LLM-powered applications\n` +
      `* **Developer Tooling:** Git, GitHub, Postman, Visual Studio Code\n\n` +
      `All technologies reflect verified coursework and active project development at Sri Siddhartha Institute of Technology.`
    );
  }

  // 7. Inquiries about Education / College / Degree
  if (query.includes("education") || query.includes("study") || query.includes("college") || query.includes("ssit") || query.includes("degree") || query.includes("university")) {
    return (
      `### Academic Details\n\n` +
      `* **Degree:** Bachelor of Engineering (B.E.)\n` +
      `* **Branch:** Computer Science and Engineering\n` +
      `* **Institution:** Sri Siddhartha Institute of Technology (SSIT)\n` +
      `* **Location:** Tumakuru, Karnataka, India\n` +
      `* **Timeline:** 2024 – 2027\n\n` +
      `*Key Coursework:* Data Structures & Algorithms, Object-Oriented Programming (C++), DBMS (MySQL & MongoDB), Operating Systems, and Web Application Development.`
    );
  }

  // 8. Inquiries about Contact / Email / LinkedIn / Hire
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("hire") ||
    query.includes("reach") ||
    query.includes("linkedin") ||
    query.includes("github")
  ) {
    return (
      `### Connect with Mohammed Affan Farooq\n\n` +
      `* **Email:** [mohammedaffan971211@gmail.com](mailto:mohammedaffan971211@gmail.com)\n` +
      `* **LinkedIn:** [linkedin.com/in/mdaffan1](https://linkedin.com/in/mdaffan1)\n` +
      `* **GitHub:** [github.com/MohammedAffan-786](https://github.com/MohammedAffan-786)\n` +
      `* **Location:** Tumakuru, Karnataka, India\n\n` +
      `He is actively open to **Software Engineering Internships**, **Full-Stack / MERN projects**, and **Open-Source collaborations**!`
    );
  }

  // 9. Default contextual synthesis
  return (
    `**Affan AI Representative:**\n\n` +
    `Mohammed Affan Farooq is a Computer Science Engineering student at SSIT Tumakuru specializing in **MERN Stack Development** and **AI-Powered Applications**.\n\n` +
    `Key areas you can ask me about:\n` +
    `- **"Tell me about Mohammed"** — Background, education, and career aspirations.\n` +
    `- **"Explain DevFlow AI"** — Autonomous code intelligence & security architecture.\n` +
    `- **"What problem does EduReach solve?"** — Agentic college guidance assistant.\n` +
    `- **"What technologies does he use?"** — Complete verified skills matrix.\n` +
    `- **"How can I contact him?"** — Verified email and LinkedIn links.\n\n` +
    `How can I assist your review of Mohammed's portfolio?`
  );
}
