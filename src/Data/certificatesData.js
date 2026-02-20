const CERTIFICATIONSIMAGES = "/certifications/"


const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "2024-01-15",
    duration: "6 months",
    level: "Advanced",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    image: null,
    description: "Comprehensive full-stack development certification covering modern web technologies and best practices.",
    branch: "feature/fullstack",
    commits: 24,
    status: "verified",
    credentialUrl: "https://coursera.org/verify/ABC123",
    tags: ["Professional", "Full Stack", "Meta"]
  },

  {
    id: 2,
    title: "React Developer Certification",
    issuer: "FreeCodeCamp",
    date: "2023-09-10",
    duration: "300 hours",
    level: "Intermediate",
    skills: ["React", "JavaScript", "Redux", "Testing"],
    image: null,
    description: "Frontend development certification with focus on React ecosystem and modern JavaScript.",
    branch: "feature/react",
    commits: 32,
    status: "verified",
    credentialUrl: "https://freecodecamp.org/certification/",
    tags: ["Frontend", "React", "JavaScript"]
  },
  {
    id: 3,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "2025-10-24",
    duration: "2 months",
    level: "Foundational",
    skills: [
      "Basic cloud concepts",
      "Core OCI services ",
      "OCI security and identity model",
      "Compliance structure",
      "OCI billing and cost management",
      "Governance and administration"
    ],
    image: `${CERTIFICATIONSIMAGES}oracle1.png`,
    description: "This certification validates fundamental knowledge of Oracle Cloud Infrastructure (OCI) services for both technical and non-technical professionals.",
    branch: "feature/cloud",
    commits: 10,
    status: "verified",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=35AE59554F84E8546F79A280D3C6BF4DB8A357446232C88681EC5978023757AF",
    tags: ["Cloud", "Oracle", "OCI", "Foundational"]
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure 2025 Certified architect associate",
    issuer: "Oracle",
    date: "2025-10-24",
    duration: "2 months",
    level: "Foundational",
    skills: [
      "Basic cloud concepts",
      "Core OCI services ",
      "OCI security and identity model",
      "Compliance structure",
      "OCI billing and cost management",
      "Governance and administration"
    ],
    image: `${CERTIFICATIONSIMAGES}oracle2.png`,
    description: "This certification validates fundamental knowledge of Oracle Cloud Infrastructure (OCI) services for both technical and non-technical professionals.",
    branch: "feature/cloud",
    commits: 10,
    status: "verified",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=35AE59554F84E8546F79A280D3C6BF4DB8A357446232C88681EC5978023757AF",
    tags: ["Cloud", "Oracle", "OCI", "Foundational"]
  },

  {
    id: 5,
    title: "Python for Data Science",
    issuer: "Google",
    date: "2023-05-20",
    duration: "4 months",
    level: "Intermediate",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
    image: null,
    description: "Data science certification focusing on Python programming and data analysis techniques.",
    branch: "feature/data-science",
    commits: 21,
    status: "verified",
    credentialUrl: null,
    tags: ["Data Science", "Python", "Analysis", "DevOps"]
  },
  {
    id: 6,
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: "2025-10-10",
    duration: "6 months",
    level: "Advanced",
    skills: ["C#", ".NET", "Programing", "Debugging"],
    image: `${CERTIFICATIONSIMAGES}csharp.png`,
    description: "A joint certification by Microsoft and freeCodeCamp that covers C# programming fundamentals, including syntax, logic, loops, methods, data types, and debugging using .NET and Visual Studio Code.",
    branch: "feature/Csharp",
    commits: 24,
    status: "verified",
    credentialUrl: "https://freecodecamp.org/certification/birukdjn/foundational-c-sharp-with-microsoft",
    tags: ["Programing", "backend", "C#", "ASP.NET", "Microsoft"]
  },
];

export default certificatesData;