import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all course IDs
export function generateStaticParams() {
  return Array.from({ length: 15 }, (_, i) => ({
    id: String(i + 1),
  }));
}

// All course data - comprehensive details
const allCoursesData = {
  1: {
    id: 1,
    title: "Computer Fundamentals & AI Literacy",
    description: "Build a strong foundation in computer basics and understand AI concepts for everyday use.",
    duration: "6 weeks",
    level: "Level 1 - Beginner",
    category: "Fundamentals",
    color: "green",
    objectives: [
      "Understand the fundamental components of computer systems",
      "Navigate operating systems confidently and efficiently",
      "Grasp core AI and machine learning concepts",
      "Apply AI tools to solve everyday problems",
      "Practice safe and responsible digital citizenship"
    ],
    whatYouLearn: [
      "Computer hardware architecture and component functions",
      "Operating system fundamentals (Windows, macOS, Linux)",
      "File management and organization best practices",
      "Introduction to artificial intelligence and machine learning",
      "Popular AI tools: ChatGPT, Google Bard, and AI assistants",
      "Digital security fundamentals and online safety",
      "Internet basics and web browsing skills",
      "Cloud storage and file sharing services"
    ],
    prerequisites: "No prior experience required - perfect for complete beginners",
    targetAudience: [
      "Complete beginners with little to no computer experience",
      "Students preparing for higher education",
      "Professionals transitioning to digital workplaces",
      "Anyone interested in understanding AI technology"
    ],
    toolsTechnologies: [
      "Windows/macOS operating systems",
      "Microsoft Office basics",
      "ChatGPT and AI assistants",
      "Cloud storage platforms (Google Drive, Dropbox)",
      "Web browsers and search engines"
    ],
    careerOpportunities: [
      "Digital literacy instructor",
      "Office assistant positions",
      "Entry-level IT support",
      "Foundation for advanced technical courses"
    ],
    modules: [
      { title: "Computer Basics & Hardware", duration: "1 week", topics: ["Hardware components", "Input/output devices", "Storage systems"] },
      { title: "Operating Systems Mastery", duration: "1 week", topics: ["Windows/macOS navigation", "File management", "System settings"] },
      { title: "Introduction to AI", duration: "2 weeks", topics: ["AI concepts", "Machine learning basics", "AI ethics"] },
      { title: "AI Tools & Applications", duration: "1 week", topics: ["ChatGPT usage", "AI assistants", "Practical applications"] },
      { title: "Digital Safety & Security", duration: "1 week", topics: ["Online safety", "Password management", "Privacy protection"] }
    ]
  },
  2: {
    id: 2,
    title: "Digital Skills for Office Professionals",
    description: "Master essential productivity tools and digital workplace skills.",
    duration: "5 weeks",
    level: "Level 1 - Beginner",
    category: "Fundamentals",
    color: "green",
    objectives: [
      "Master Microsoft Office Suite for professional productivity",
      "Communicate effectively in digital workplaces",
      "Manage files and collaborate using cloud platforms",
      "Conduct professional virtual meetings",
      "Optimize workflow with productivity tools"
    ],
    whatYouLearn: [
      "Microsoft Word: document creation, formatting, templates",
      "Microsoft Excel: spreadsheets, formulas, data analysis",
      "Microsoft PowerPoint: presentation design and delivery",
      "Email etiquette and professional communication",
      "Google Workspace (Docs, Sheets, Slides)",
      "Cloud storage: Google Drive, OneDrive, Dropbox",
      "Virtual meeting platforms: Zoom, Microsoft Teams, Google Meet",
      "Time management tools and productivity apps"
    ],
    prerequisites: "Basic computer knowledge recommended",
    targetAudience: [
      "Office professionals transitioning to digital tools",
      "Students preparing for corporate careers",
      "Entrepreneurs managing small businesses",
      "Anyone seeking to improve workplace productivity"
    ],
    toolsTechnologies: [
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Google Workspace",
      "Zoom, Microsoft Teams",
      "Cloud storage platforms",
      "Email clients (Outlook, Gmail)"
    ],
    careerOpportunities: [
      "Administrative assistant",
      "Office coordinator",
      "Executive assistant",
      "Data entry specialist",
      "Customer service representative"
    ],
    modules: [
      { title: "Word Processing Mastery", duration: "1 week", topics: ["Document formatting", "Templates", "Mail merge"] },
      { title: "Spreadsheets & Data Management", duration: "1.5 weeks", topics: ["Excel formulas", "Data analysis", "Charts"] },
      { title: "Professional Presentations", duration: "1 week", topics: ["PowerPoint design", "Presentation skills"] },
      { title: "Digital Communication Tools", duration: "1 week", topics: ["Email management", "Virtual meetings", "Collaboration"] },
      { title: "Productivity & Time Management", duration: "0.5 weeks", topics: ["Task management", "Calendar tools", "Workflow optimization"] }
    ]
  },
  3: {
    id: 3,
    title: "Computer Hardware & Troubleshooting",
    description: "Learn to diagnose and fix common hardware issues, understand computer components.",
    duration: "4 weeks",
    level: "Level 1 - Beginner",
    category: "Fundamentals",
    color: "green",
    objectives: [
      "Identify and understand all computer hardware components",
      "Assemble and disassemble computers safely",
      "Diagnose common hardware problems systematically",
      "Perform routine maintenance and upgrades",
      "Build confidence in handling computer repairs"
    ],
    whatYouLearn: [
      "Motherboard architecture and components",
      "CPU, RAM, and storage technologies",
      "Power supply units and cooling systems",
      "Graphics cards and expansion slots",
      "Peripheral devices and connectivity",
      "BIOS/UEFI configuration",
      "Hardware troubleshooting methodology",
      "System upgrades and component replacement",
      "Preventive maintenance techniques"
    ],
    prerequisites: "No prior experience required - hands-on learning",
    targetAudience: [
      "Aspiring IT support technicians",
      "Home users wanting to maintain their own PCs",
      "Students interested in hardware careers",
      "Small business owners managing equipment"
    ],
    toolsTechnologies: [
      "Computer hardware components",
      "Diagnostic tools and software",
      "Basic hand tools (screwdrivers, anti-static equipment)",
      "Testing equipment (multimeters)",
      "Hardware monitoring software"
    ],
    careerOpportunities: [
      "Computer repair technician",
      "IT support specialist",
      "Hardware maintenance technician",
      "PC builder/assembler",
      "Technical support representative"
    ],
    modules: [
      { title: "Hardware Components Deep Dive", duration: "1 week", topics: ["Motherboards", "CPUs", "RAM", "Storage devices"] },
      { title: "PC Assembly Fundamentals", duration: "1 week", topics: ["Building from scratch", "Cable management", "BIOS setup"] },
      { title: "Troubleshooting Techniques", duration: "1.5 weeks", topics: ["Diagnostic methods", "Common issues", "Repair procedures"] },
      { title: "Maintenance & Upgrades", duration: "0.5 weeks", topics: ["Cleaning", "Upgrades", "Performance optimization"] }
    ]
  },
  4: {
    id: 4,
    title: "AI Essentials for Everyone",
    description: "Explore AI tools and applications to enhance productivity and creativity.",
    duration: "8 weeks",
    level: "Level 2 - Intermediate",
    category: "AI & Technology",
    color: "blue",
    objectives: [
      "Understand modern AI and its real-world applications",
      "Master AI productivity tools for work efficiency",
      "Create stunning visuals using AI image generators",
      "Automate workflows with AI-powered solutions",
      "Navigate ethical considerations in AI usage"
    ],
    whatYouLearn: [
      "AI fundamentals and machine learning concepts",
      "ChatGPT, Claude, and other language models",
      "Prompt engineering techniques for better results",
      "AI image generation: Midjourney, DALL-E, Stable Diffusion",
      "AI video creation and editing tools",
      "AI-powered writing assistants and content creation",
      "Automation with AI: Zapier, Make, n8n",
      "AI in business: productivity and decision-making",
      "Ethics, bias, and responsible AI use"
    ],
    prerequisites: "Computer Fundamentals & AI Literacy or equivalent knowledge",
    targetAudience: [
      "Professionals seeking to leverage AI at work",
      "Content creators and marketers",
      "Freelancers wanting competitive advantage",
      "Business owners optimizing operations",
      "Anyone curious about practical AI applications"
    ],
    toolsTechnologies: [
      "ChatGPT, Claude AI, Bard",
      "Midjourney, DALL-E, Stable Diffusion",
      "Canva AI, Adobe Firefly",
      "Notion AI, Jasper AI",
      "Zapier, Make (Integromat)",
      "GitHub Copilot"
    ],
    careerOpportunities: [
      "AI prompt engineer",
      "AI content creator",
      "Digital marketing specialist with AI skills",
      "Automation consultant",
      "AI tools trainer"
    ],
    modules: [
      { title: "AI Fundamentals", duration: "1 week", topics: ["AI basics", "Machine learning intro", "Current landscape"] },
      { title: "Language Models Mastery", duration: "2 weeks", topics: ["ChatGPT deep dive", "Prompt engineering", "Use cases"] },
      { title: "AI Image Generation", duration: "2 weeks", topics: ["Midjourney", "DALL-E", "Prompt techniques"] },
      { title: "AI Automation & Workflows", duration: "2 weeks", topics: ["Automation tools", "Integration", "Practical projects"] },
      { title: "Ethics & Future of AI", duration: "1 week", topics: ["Ethical considerations", "Bias", "Future trends"] }
    ]
  },
  5: {
    id: 5,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, and Node.js in this intensive program.",
    duration: "12 weeks",
    level: "Level 2 - Intermediate",
    category: "Development",
    color: "blue",
    objectives: [
      "Build responsive websites from scratch",
      "Master modern JavaScript and ES6+ features",
      "Create dynamic web applications with React",
      "Develop full-stack applications with Node.js",
      "Deploy production-ready applications"
    ],
    whatYouLearn: [
      "HTML5 semantic markup and accessibility",
      "CSS3, Flexbox, Grid, and responsive design",
      "JavaScript fundamentals and advanced concepts",
      "ES6+ features: arrow functions, promises, async/await",
      "React: components, hooks, state management",
      "Node.js and Express.js backend development",
      "RESTful API design and implementation",
      "Database integration (MongoDB, PostgreSQL)",
      "Version control with Git and GitHub",
      "Deployment: Vercel, Netlify, Heroku"
    ],
    prerequisites: "Basic computer skills and logical thinking - no coding experience needed",
    targetAudience: [
      "Career changers moving into tech",
      "Students pursuing software development",
      "Entrepreneurs building their own products",
      "Designers wanting to code their designs",
      "Anyone passionate about creating for the web"
    ],
    toolsTechnologies: [
      "HTML5, CSS3, JavaScript",
      "React.js, Next.js",
      "Node.js, Express.js",
      "MongoDB, PostgreSQL",
      "Git, GitHub",
      "VS Code",
      "Postman, npm"
    ],
    careerOpportunities: [
      "Frontend developer",
      "Full-stack developer",
      "React developer",
      "Web application developer",
      "Junior software engineer"
    ],
    modules: [
      { title: "HTML & CSS Foundations", duration: "2 weeks", topics: ["HTML5", "CSS3", "Responsive design", "Flexbox & Grid"] },
      { title: "JavaScript Fundamentals", duration: "2 weeks", topics: ["Variables", "Functions", "DOM manipulation", "Events"] },
      { title: "Advanced JavaScript", duration: "2 weeks", topics: ["ES6+", "Async programming", "Fetch API", "Object-oriented JS"] },
      { title: "React Development", duration: "3 weeks", topics: ["Components", "Hooks", "State management", "React Router"] },
      { title: "Backend & Full-Stack", duration: "3 weeks", topics: ["Node.js", "Express", "APIs", "Databases", "Deployment"] }
    ]
  },
  6: {
    id: 6,
    title: "UI/UX Design",
    description: "Create stunning user interfaces and experiences with industry-standard tools.",
    duration: "10 weeks",
    level: "Level 2 - Intermediate",
    category: "Design",
    color: "blue",
    objectives: [
      "Master design principles and visual hierarchy",
      "Conduct user research and create personas",
      "Design intuitive user interfaces",
      "Prototype interactive experiences",
      "Build and maintain design systems"
    ],
    whatYouLearn: [
      "Design fundamentals: color theory, typography, layout",
      "User research methods and techniques",
      "User personas and journey mapping",
      "Wireframing and prototyping workflows",
      "Figma: professional interface design",
      "Adobe XD and design tool alternatives",
      "Responsive and mobile-first design",
      "Interaction design and micro-interactions",
      "Design systems and component libraries",
      "Accessibility (WCAG) and inclusive design",
      "Usability testing and iteration"
    ],
    prerequisites: "Basic computer skills and creative mindset - no design experience required",
    targetAudience: [
      "Aspiring UI/UX designers",
      "Developers wanting design skills",
      "Graphic designers transitioning to digital",
      "Product managers understanding design",
      "Entrepreneurs designing their products"
    ],
    toolsTechnologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Miro",
      "UserTesting.com",
      "Optimal Workshop"
    ],
    careerOpportunities: [
      "UI/UX designer",
      "Product designer",
      "Interaction designer",
      "Visual designer",
      "UX researcher"
    ],
    modules: [
      { title: "Design Fundamentals", duration: "2 weeks", topics: ["Color theory", "Typography", "Layout principles", "Visual hierarchy"] },
      { title: "User Research", duration: "2 weeks", topics: ["Research methods", "Personas", "Journey maps", "User interviews"] },
      { title: "Wireframing & Prototyping", duration: "2 weeks", topics: ["Low-fi wireframes", "High-fi mockups", "Interactive prototypes"] },
      { title: "Design Tools Mastery", duration: "2 weeks", topics: ["Figma advanced", "Component creation", "Auto-layout"] },
      { title: "Design Systems", duration: "2 weeks", topics: ["Component libraries", "Design tokens", "Documentation"] }
    ]
  },
  7: {
    id: 7,
    title: "Data Science & Machine Learning",
    description: "Learn Python, statistics, machine learning algorithms, and data visualization.",
    duration: "16 weeks",
    level: "Level 3 - Advanced",
    category: "Data Science",
    color: "purple",
    objectives: [
      "Master Python programming for data analysis",
      "Apply statistical methods to real-world data",
      "Build and train machine learning models",
      "Implement deep learning neural networks",
      "Create compelling data visualizations"
    ],
    whatYouLearn: [
      "Python programming fundamentals",
      "NumPy, Pandas for data manipulation",
      "Statistical analysis and hypothesis testing",
      "Probability theory and distributions",
      "Supervised learning: regression, classification",
      "Unsupervised learning: clustering, dimensionality reduction",
      "Neural networks and deep learning (TensorFlow, PyTorch)",
      "Natural language processing basics",
      "Computer vision fundamentals",
      "Data visualization with Matplotlib, Seaborn, Plotly",
      "Model evaluation and optimization",
      "Real-world project implementation"
    ],
    prerequisites: "Programming basics and mathematical foundation (algebra, basic calculus)",
    targetAudience: [
      "Software developers entering data science",
      "Analysts wanting ML skills",
      "STEM graduates pursuing AI careers",
      "Researchers needing data analysis skills",
      "Tech professionals upskilling"
    ],
    toolsTechnologies: [
      "Python",
      "Jupyter Notebooks",
      "NumPy, Pandas, Scikit-learn",
      "TensorFlow, PyTorch",
      "Matplotlib, Seaborn, Plotly",
      "SQL",
      "Git, GitHub"
    ],
    careerOpportunities: [
      "Data scientist",
      "Machine learning engineer",
      "Data analyst",
      "AI researcher",
      "Business intelligence analyst"
    ],
    modules: [
      { title: "Python for Data Science", duration: "3 weeks", topics: ["Python basics", "NumPy", "Pandas", "Data wrangling"] },
      { title: "Statistics & Probability", duration: "3 weeks", topics: ["Descriptive stats", "Inferential stats", "Hypothesis testing"] },
      { title: "Machine Learning", duration: "4 weeks", topics: ["Regression", "Classification", "Clustering", "Model evaluation"] },
      { title: "Deep Learning", duration: "4 weeks", topics: ["Neural networks", "CNN", "RNN", "Transfer learning"] },
      { title: "Real-world Projects", duration: "2 weeks", topics: ["Capstone project", "Portfolio building", "Best practices"] }
    ]
  },
  8: {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity concepts, ethical hacking, and network security.",
    duration: "10 weeks",
    level: "Level 3 - Advanced",
    category: "Security",
    color: "purple",
    objectives: [
      "Understand cybersecurity threat landscape",
      "Master network security principles",
      "Perform ethical hacking and penetration testing",
      "Implement security best practices",
      "Respond to security incidents effectively"
    ],
    whatYouLearn: [
      "Cybersecurity fundamentals and CIA triad",
      "Network protocols and architecture",
      "Cryptography and encryption techniques",
      "Ethical hacking methodology",
      "Penetration testing tools and techniques",
      "Vulnerability assessment and scanning",
      "Web application security (OWASP Top 10)",
      "Wireless network security",
      "Social engineering and phishing",
      "Incident response and forensics basics",
      "Security frameworks (NIST, ISO 27001)",
      "Cloud security essentials"
    ],
    prerequisites: "Computer Hardware & Troubleshooting or equivalent networking knowledge",
    targetAudience: [
      "IT professionals entering security",
      "Network administrators upskilling",
      "Developers securing applications",
      "Aspiring ethical hackers",
      "Security compliance professionals"
    ],
    toolsTechnologies: [
      "Kali Linux",
      "Metasploit",
      "Nmap, Wireshark",
      "Burp Suite",
      "OWASP ZAP",
      "Virtual machines (VirtualBox)",
      "Python for security scripting"
    ],
    careerOpportunities: [
      "Cybersecurity analyst",
      "Penetration tester",
      "Security consultant",
      "Incident response specialist",
      "Security operations center (SOC) analyst"
    ],
    modules: [
      { title: "Security Fundamentals", duration: "2 weeks", topics: ["CIA triad", "Threat landscape", "Security frameworks"] },
      { title: "Network Security", duration: "2 weeks", topics: ["Protocols", "Firewalls", "IDS/IPS", "VPNs"] },
      { title: "Ethical Hacking", duration: "3 weeks", topics: ["Reconnaissance", "Scanning", "Exploitation", "Post-exploitation"] },
      { title: "Security Tools", duration: "2 weeks", topics: ["Metasploit", "Nmap", "Burp Suite", "Wireshark"] },
      { title: "Incident Response", duration: "1 week", topics: ["Detection", "Analysis", "Containment", "Recovery"] }
    ]
  },
  9: {
    id: 9,
    title: "Cloud Architecture with AWS",
    description: "Deploy scalable applications using Amazon Web Services and cloud infrastructure.",
    duration: "8 weeks",
    level: "Level 3 - Advanced",
    category: "Cloud Computing",
    color: "purple",
    objectives: [
      "Design scalable cloud architectures",
      "Deploy applications on AWS infrastructure",
      "Implement cloud security best practices",
      "Optimize cloud costs and performance",
      "Automate deployments with DevOps tools"
    ],
    whatYouLearn: [
      "AWS core services and global infrastructure",
      "EC2: virtual servers and instance types",
      "S3: object storage and data management",
      "RDS and DynamoDB: database services",
      "VPC: networking and security groups",
      "IAM: identity and access management",
      "Lambda: serverless computing",
      "CloudFormation: infrastructure as code",
      "CloudWatch: monitoring and logging",
      "Load balancing and auto-scaling",
      "CI/CD pipelines with CodePipeline",
      "Cost optimization strategies"
    ],
    prerequisites: "Web Development experience and basic networking knowledge",
    targetAudience: [
      "Developers deploying cloud applications",
      "System administrators migrating to cloud",
      "DevOps engineers",
      "Solutions architects",
      "IT professionals pursuing AWS certification"
    ],
    toolsTechnologies: [
      "Amazon Web Services (AWS)",
      "AWS CLI",
      "CloudFormation, Terraform",
      "Docker",
      "Git, GitHub Actions",
      "Linux command line",
      "Python/Node.js for scripting"
    ],
    careerOpportunities: [
      "Cloud engineer",
      "Solutions architect",
      "DevOps engineer",
      "Site reliability engineer (SRE)",
      "Cloud security specialist"
    ],
    modules: [
      { title: "AWS Fundamentals", duration: "1 week", topics: ["AWS overview", "Core concepts", "Management console"] },
      { title: "Core Services", duration: "2 weeks", topics: ["EC2", "S3", "RDS", "VPC basics"] },
      { title: "Networking & Security", duration: "2 weeks", topics: ["VPC deep dive", "Security groups", "IAM", "CloudFront"] },
      { title: "Serverless Architecture", duration: "2 weeks", topics: ["Lambda", "API Gateway", "DynamoDB", "Event-driven"] },
      { title: "DevOps & Deployment", duration: "1 week", topics: ["CI/CD", "CloudFormation", "Monitoring", "Best practices"] }
    ]
  },
  10: {
    id: 10,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native and Flutter.",
    duration: "12 weeks",
    level: "Level 3 - Advanced",
    category: "Development",
    color: "purple",
    objectives: [
      "Build cross-platform mobile applications",
      "Master React Native and Flutter frameworks",
      "Integrate native device features",
      "Implement app navigation and state management",
      "Deploy apps to App Store and Google Play"
    ],
    whatYouLearn: [
      "Mobile app development fundamentals",
      "React Native: components and styling",
      "Flutter and Dart programming language",
      "Mobile UI/UX design patterns",
      "Navigation (React Navigation, Flutter Navigator)",
      "State management (Redux, Provider, Bloc)",
      "Native device APIs (camera, GPS, sensors)",
      "Push notifications and background tasks",
      "Local storage and SQLite",
      "REST API integration",
      "Testing mobile applications",
      "App store submission and optimization"
    ],
    prerequisites: "Web Development Bootcamp or JavaScript/programming proficiency",
    targetAudience: [
      "Web developers entering mobile",
      "Software engineers expanding skills",
      "Entrepreneurs building mobile products",
      "Freelancers offering mobile development",
      "Students pursuing mobile careers"
    ],
    toolsTechnologies: [
      "React Native",
      "Flutter, Dart",
      "Expo",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Redux, MobX"
    ],
    careerOpportunities: [
      "Mobile app developer",
      "React Native developer",
      "Flutter developer",
      "Full-stack mobile engineer",
      "Mobile UI/UX specialist"
    ],
    modules: [
      { title: "Mobile Development Basics", duration: "2 weeks", topics: ["Mobile platforms", "Dev environment", "First apps"] },
      { title: "React Native", duration: "4 weeks", topics: ["Components", "Navigation", "State management", "Native modules"] },
      { title: "Flutter Development", duration: "4 weeks", topics: ["Dart basics", "Widgets", "State management", "Platform integration"] },
      { title: "App Deployment", duration: "2 weeks", topics: ["Testing", "Optimization", "App Store", "Google Play"] }
    ]
  },
  11: {
    id: 11,
    title: "Fiverr Introduction",
    description: "Learn how to create and optimize your Fiverr profile to attract clients.",
    duration: "2 weeks",
    level: "Freelancing",
    category: "Freelancing",
    color: "orange",
    objectives: [
      "Set up a professional Fiverr seller account",
      "Create compelling gigs that convert",
      "Understand Fiverr's algorithm and ranking system",
      "Master client communication and delivery",
      "Build positive reviews and reputation"
    ],
    whatYouLearn: [
      "Fiverr platform overview and marketplace dynamics",
      "Profile optimization and branding",
      "Gig creation: titles, descriptions, tags, pricing",
      "Portfolio and gig images that attract buyers",
      "Pricing strategies for different service tiers",
      "Fiverr SEO and search ranking factors",
      "Order management and delivery best practices",
      "Client communication and expectation setting",
      "Handling revisions and difficult clients",
      "Building 5-star reviews systematically",
      "Fiverr Pro and level progression",
      "Scaling your Fiverr business"
    ],
    prerequisites: "None - suitable for complete beginners in freelancing",
    targetAudience: [
      "Complete beginners to freelancing",
      "Students earning income online",
      "Professionals starting side hustles",
      "Creatives monetizing their skills",
      "Anyone wanting location-independent income"
    ],
    toolsTechnologies: [
      "Fiverr platform",
      "Canva for gig images",
      "Video creation tools",
      "Communication tools",
      "Time tracking software"
    ],
    careerOpportunities: [
      "Freelance service provider on Fiverr",
      "Digital services seller",
      "Online entrepreneur",
      "Side income generator",
      "Full-time Fiverr seller"
    ],
    modules: [
      { title: "Fiverr Basics & Setup", duration: "0.5 weeks", topics: ["Platform overview", "Account creation", "Niche selection"] },
      { title: "Creating Winning Gigs", duration: "0.5 weeks", topics: ["Gig structure", "Pricing tiers", "SEO optimization"] },
      { title: "Optimization & Marketing", duration: "0.5 weeks", topics: ["Profile branding", "Gig promotion", "Algorithm tips"] },
      { title: "Client Management", duration: "0.5 weeks", topics: ["Communication", "Order delivery", "Review generation"] }
    ]
  },
  12: {
    id: 12,
    title: "Upwork Introduction",
    description: "Master the Upwork platform and learn how to win your first projects.",
    duration: "2 weeks",
    level: "Freelancing",
    category: "Freelancing",
    color: "orange",
    objectives: [
      "Build a standout Upwork profile",
      "Write proposals that win jobs",
      "Understand Upwork's job success score",
      "Master the bidding and connect system",
      "Establish long-term client relationships"
    ],
    whatYouLearn: [
      "Upwork platform structure and opportunities",
      "Profile creation: headline, overview, portfolio",
      "Skills selection and endorsements",
      "Finding the right jobs to bid on",
      "Proposal writing that gets responses",
      "Understanding client psychology",
      "Connects system and bidding strategies",
      "Interview preparation and screening calls",
      "Contract negotiation and terms",
      "Time tracking and milestone payments",
      "Job Success Score (JSS) maintenance",
      "Building Top Rated status",
      "Scaling to agency model"
    ],
    prerequisites: "None - suitable for freelancing beginners",
    targetAudience: [
      "Professionals offering skilled services",
      "Developers, designers, writers",
      "Consultants entering online market",
      "Experienced workers going freelance",
      "Anyone seeking long-term client work"
    ],
    toolsTechnologies: [
      "Upwork platform",
      "Time tracking tools (Upwork Desktop App)",
      "Proposal templates",
      "Portfolio tools",
      "Communication platforms"
    ],
    careerOpportunities: [
      "Upwork freelancer",
      "Independent consultant",
      "Remote contractor",
      "Agency owner",
      "Full-time freelance professional"
    ],
    modules: [
      { title: "Profile Setup", duration: "0.5 weeks", topics: ["Profile optimization", "Portfolio building", "Skills showcase"] },
      { title: "Proposal Writing", duration: "0.5 weeks", topics: ["Winning proposals", "Templates", "Customization"] },
      { title: "Bidding Strategies", duration: "0.5 weeks", topics: ["Job selection", "Connect usage", "Pricing strategies"] },
      { title: "Client Success", duration: "0.5 weeks", topics: ["Client relationships", "JSS management", "Long-term growth"] }
    ]
  },
  13: {
    id: 13,
    title: "Freelancing Basics",
    description: "Essential skills for starting and managing a successful freelancing career.",
    duration: "4 weeks",
    level: "Freelancing",
    category: "Freelancing",
    color: "orange",
    objectives: [
      "Find your profitable freelancing niche",
      "Set competitive rates and pricing",
      "Manage time and projects effectively",
      "Negotiate contracts confidently",
      "Run your freelance business professionally"
    ],
    whatYouLearn: [
      "Finding and validating your niche",
      "Market research and competitor analysis",
      "Setting hourly rates vs. project-based pricing",
      "Creating service packages and pricing tiers",
      "Time management and productivity systems",
      "Client acquisition strategies",
      "Contract fundamentals and legal basics",
      "Scope of work and project agreements",
      "Invoice creation and payment terms",
      "Tax basics for freelancers",
      "Managing cash flow and expenses",
      "Client communication best practices",
      "Handling scope creep and revisions",
      "Building passive income streams"
    ],
    prerequisites: "None - foundational course for all freelancers",
    targetAudience: [
      "Anyone starting a freelancing career",
      "Side hustlers going full-time",
      "Recent graduates entering gig economy",
      "Career changers seeking flexibility",
      "Remote workers becoming independent"
    ],
    toolsTechnologies: [
      "Project management tools (Trello, Asana)",
      "Time tracking (Toggl, Clockify)",
      "Invoicing software (Wave, FreshBooks)",
      "Contract templates",
      "Accounting basics"
    ],
    careerOpportunities: [
      "Independent freelancer in any field",
      "Consultant",
      "Solopreneur",
      "Digital nomad",
      "Small business owner"
    ],
    modules: [
      { title: "Getting Started", duration: "1 week", topics: ["Niche selection", "Market research", "Service definition"] },
      { title: "Pricing & Negotiation", duration: "1 week", topics: ["Rate setting", "Negotiation tactics", "Value-based pricing"] },
      { title: "Client Management", duration: "1 week", topics: ["Communication", "Expectations", "Boundaries"] },
      { title: "Business Operations", duration: "1 week", topics: ["Contracts", "Invoicing", "Taxes", "Scaling"] }
    ]
  },
  14: {
    id: 14,
    title: "Portfolio Creation",
    description: "Build a professional portfolio that showcases your skills and attracts clients.",
    duration: "3 weeks",
    level: "Freelancing",
    category: "Freelancing",
    color: "orange",
    objectives: [
      "Plan a strategic portfolio structure",
      "Select and present your best work",
      "Write compelling case studies",
      "Build your personal brand identity",
      "Create a portfolio website that converts"
    ],
    whatYouLearn: [
      "Portfolio strategy and planning",
      "Selecting projects that showcase expertise",
      "Case study structure and storytelling",
      "Problem-solution-results framework",
      "Portfolio website design principles",
      "No-code website builders (Webflow, Wix, WordPress)",
      "Domain registration and hosting",
      "Personal branding and positioning",
      "Writing compelling about pages",
      "Contact forms and call-to-actions",
      "SEO basics for portfolio sites",
      "Social proof and testimonials",
      "Portfolio maintenance and updates",
      "Driving traffic to your portfolio"
    ],
    prerequisites: "At least one technical skill course completed (any level)",
    targetAudience: [
      "Freelancers building credibility",
      "Job seekers showcasing work",
      "Creatives needing online presence",
      "Students entering job market",
      "Professionals rebranding"
    ],
    toolsTechnologies: [
      "Webflow, Wix, WordPress",
      "Notion (for simple portfolios)",
      "Figma (for design)",
      "Canva",
      "Domain providers (Namecheap, GoDaddy)",
      "Hosting platforms"
    ],
    careerOpportunities: [
      "Enhanced freelance opportunities",
      "Better client acquisition",
      "Higher-paying projects",
      "Job interview advantages",
      "Personal brand establishment"
    ],
    modules: [
      { title: "Portfolio Strategy", duration: "0.5 weeks", topics: ["Planning", "Project selection", "Audience targeting"] },
      { title: "Content Creation", duration: "1 week", topics: ["Case studies", "Copywriting", "Visual assets"] },
      { title: "Website Building", duration: "1 week", topics: ["Platform selection", "Design", "Development"] },
      { title: "Launch & Promotion", duration: "0.5 weeks", topics: ["SEO", "Social media", "Networking"] }
    ]
  },
  15: {
    id: 15,
    title: "AI Tools for Freelancers",
    description: "Leverage AI tools to increase productivity and deliver better results to clients.",
    duration: "3 weeks",
    level: "Freelancing",
    category: "Freelancing",
    color: "orange",
    objectives: [
      "Integrate AI into your freelance workflow",
      "Boost productivity with AI assistants",
      "Deliver higher quality work faster",
      "Offer premium AI-enhanced services",
      "Stay competitive in the AI era"
    ],
    whatYouLearn: [
      "AI landscape for freelancers overview",
      "ChatGPT for content creation and research",
      "AI writing tools: Jasper, Copy.ai, Writesonic",
      "AI design tools: Canva AI, Adobe Firefly, Midjourney",
      "AI video editing: Descript, Runway ML",
      "AI coding assistants: GitHub Copilot, Tabnine",
      "AI for social media management",
      "Automation with AI: workflows and integrations",
      "Client proposal generation with AI",
      "AI-powered project management",
      "Quality control: human + AI collaboration",
      "Ethical AI usage and disclosure",
      "Pricing AI-enhanced services",
      "Marketing your AI capabilities"
    ],
    prerequisites: "AI Essentials for Everyone recommended but not required",
    targetAudience: [
      "Freelancers wanting competitive edge",
      "Content creators and marketers",
      "Designers and creatives",
      "Developers and programmers",
      "Anyone offering digital services"
    ],
    toolsTechnologies: [
      "ChatGPT, Claude AI",
      "Jasper AI, Copy.ai",
      "Midjourney, DALL-E",
      "Canva AI, Figma AI",
      "GitHub Copilot",
      "Notion AI",
      "Zapier, Make"
    ],
    careerOpportunities: [
      "AI-enhanced freelance services",
      "Premium service offerings",
      "Faster project delivery",
      "Higher earning potential",
      "Future-proof skill set"
    ],
    modules: [
      { title: "AI Writing Tools", duration: "1 week", topics: ["Content creation", "Copywriting", "Research automation"] },
      { title: "AI Design Tools", duration: "1 week", topics: ["Image generation", "Design assistance", "Video editing"] },
      { title: "Automation & Workflow", duration: "1 week", topics: ["AI integrations", "Process automation", "Client delivery"] }
    ]
  }
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = parseInt(params.id);
  const course = allCoursesData[courseId as keyof typeof allCoursesData];

  if (!course) {
    notFound();
  }

  const colorClasses = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="glass rounded-3xl p-6 md:p-8 mb-8 animate-slide-in-down">
          <div className="mb-4">
            <span className={`px-3 py-1 ${colorClasses[course.color as keyof typeof colorClasses]} text-sm font-medium rounded-full`}>
              {course.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <span>{course.level}</span>
            </div>
          </div>

          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105">
            Enroll Now
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Objectives */}
            {course.objectives && (
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Learning Objectives
              </h2>
              <ul className="space-y-3">
                {course.objectives.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {/* What You'll Learn */}
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                {course.whatYouLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            {course.toolsTechnologies && (
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.toolsTechnologies.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            )}

            {/* Target Audience */}
            {course.targetAudience && (
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who Should Take This Course?
              </h2>
              <ul className="space-y-3">
                {course.targetAudience.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {/* Career Opportunities */}
            {course.careerOpportunities && (
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Career Opportunities
              </h2>
              <ul className="space-y-3">
                {course.careerOpportunities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {/* Course Modules */}
            <div className="glass rounded-2xl p-6 md:p-8 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{module.title}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{module.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <div className="glass rounded-2xl p-6 sticky top-6 animate-scale-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Course Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                  <p className="text-gray-900 dark:text-white font-medium">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Level</p>
                  <p className="text-gray-900 dark:text-white font-medium">{course.level}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Prerequisites</p>
                  <p className="text-gray-900 dark:text-white font-medium">{course.prerequisites}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Modules</p>
                  <p className="text-gray-900 dark:text-white font-medium">{course.modules.length} modules</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 mb-3">
                  Enroll Now
                </button>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 text-center border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
