export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  color: string;
  objectives: string[];
  whatYouLearn: string[];
  prerequisites: string;
  targetAudience: string[];
  toolsTechnologies: string[];
  careerOpportunities: string[];
  modules: CourseModule[];
  examInfo?: string;
}

export const allCoursesData: Record<number, Course> = {
  1: {
    id: 1,
    title: "Computer Fundamentals & AI Literacy",
    description: "Build a strong foundation in computer basics and understand AI concepts for everyday use.",
    duration: "6 weeks",
    level: "Level 1 - Beginner",
    category: "Fundamentals",
    color: "green",
    objectives: [
      "Master the physical and digital components of modern computing systems",
      "Navigate Windows and macOS environments with professional efficiency",
      "Understand the 'How and Why' behind Artificial Intelligence, demystifying the 'magic'",
      "Leverage AI tools (ChatGPT, Gemini, etc.) to automate daily personal and work tasks",
      "Develop a 'Security-First' mindset for safe internet and cloud usage"
    ],
    whatYouLearn: [
      "Hardware architecture: CPU, RAM, SSD, and Graphics functions",
      "Operating System Mastery: Windows & macOS file management and optimization",
      "Modern Web Connectivity: DNS, IP addresses, and secure browsing",
      "Cloud Ecosystems: Google Workspace, Microsoft 365, and iCloud sync",
      "AI Foundations: Large Language Models (LLMs) and Generative AI history",
      "Prompt Engineering: Crafting effective prompts for AI assistants",
      "Creative AI: Image generation and voice-to-text tools",
      "Digital Security: Multi-Factor Authentication (MFA) and scam prevention"
    ],
    prerequisites: "No prior experience required - perfect for complete beginners",
    targetAudience: [
      "Complete beginners with little to no computer experience",
      "Students preparing for higher education",
      "Professionals transitioning to digital workplaces",
      "Anyone seeking to save time using AI tools"
    ],
    toolsTechnologies: [
      "Windows 10/11 & macOS",
      "ChatGPT, Google Gemini, Claude",
      "Google Workspace & Microsoft 365",
      "Bitwarden & 2FA Apps",
      "Canva AI & Adobe Firefly"
    ],
    careerOpportunities: [
      "Digital Literacy Instructor",
      "Office Administrator",
      "Entry-level IT Support",
      "Foundation for all advanced technical careers"
    ],
    modules: [
      { title: "Hardware & OS Foundations", duration: "Week 1", topics: ["Anatomy of a Computer", "OS Navigation", "Shortcuts & Optimization"] },
      { title: "The Modern Web & Connectivity", duration: "Week 2", topics: ["How Internet Works", "Browser Power-User Skills", "Cloud Ecosystems"] },
      { title: "Introduction to Artificial Intelligence", duration: "Week 3", topics: ["AI vs Human Intelligence", "LLM Rise", "AI Ethics & Hallucinations"] },
      { title: "AI for Personal Productivity", duration: "Week 4", topics: ["Prompt Engineering Basics", "ChatGPT/Gemini workflows", "AI Search"] },
      { title: "Creative AI Tools", duration: "Week 5", topics: ["AI Image Generation", "Voice & Transcription", "Content Creation"] },
      { title: "Digital Security & AI Safety", duration: "Week 6", topics: ["AI Scams & Deepfakes", "2FA & Security", "Capstone Project"] }
    ],
    examInfo: "Final Assessment: A comprehensive exam containing 25 Multiple Choice Questions (MCQs) to validate your mastery of fundamentals and AI concepts."
  },
  // Placeholder for other courses - will be migrated from page.tsx
  2: {
    id: 2,
    title: "Digital Skills for Office Professionals",
    description: "Master essential productivity tools and digital workplace skills.",
    duration: "5 weeks",
    level: "Level 1 - Beginner",
    category: "Fundamentals",
    color: "green",
    objectives: ["Master MS Office", "Digital Communication", "Cloud Collaboration"],
    whatYouLearn: ["Word", "Excel", "PowerPoint", "Email Etiquette"],
    prerequisites: "Basic computer knowledge",
    targetAudience: ["Office workers", "Students"],
    toolsTechnologies: ["Office 365", "Google Workspace"],
    careerOpportunities: ["Admin Assistant", "Data Entry"],
    modules: [{ title: "Word Processing", duration: "1 Week", topics: ["Formatting", "Templates"] }]
  }
};
