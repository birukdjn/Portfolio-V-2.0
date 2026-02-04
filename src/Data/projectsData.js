
const PROJECTIMAGES = "/projects/";
const GITHUB_USERNAME = "birukdjn";


const getLanguageColor = (lang) => {
  const colors = {
    "C#": "bg-green-600",
    "JavaScript": "bg-yellow-400",
    "TypeScript": "bg-blue-600",
    "Python": "bg-blue-500",
    "Java": "bg-red-600",
    "Vue": "bg-emerald-400",
    "HTML": "bg-orange-500",
    "CSS": "bg-blue-400",
    "Next.js": "bg-black",
    "React": "bg-sky-400",
    "Tailwind CSS": "bg-teal-400",
    "Django": "bg-green-500",
    "Flask": "bg-gray-500",
    "Ruby": "bg-red-400",
    "Go": "bg-cyan-400",
    "PHP": "bg-purple-500",
  };
  return colors[lang] || "bg-gray-500";
};


export const fetchGitHubProjects = async (limit = null) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    );
    const data = await response.json()

    if (!Array.isArray(data)) return [];

    const projects = data
      .map((repo) => ({
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        description: repo.description || "A professional project built with modern technologies.",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watches: repo.watchers_count,
        language: repo.language || "Mixed",
        languageColor: getLanguageColor(repo.language),
        lastCommit: new Date(repo.pushed_at).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: 'numeric'
        }),
        branch: repo.default_branch,
        status: repo.archived ? "archived" : "active",
        tags: repo.topics.length > 0 ? repo.topics : [repo.language, "Web"].filter(Boolean),
        repoUrl: repo.html_url,
        liveUrl: repo.homepage || `${repo.html_url}/blob/${repo.default_branch}/README.md`,
        // Assumes images in /public/projects/ match repo name (e.g., gobet.png)
        images: [`${PROJECTIMAGES}${repo.name.toLowerCase()}.png`],
      }));
    return limit ? projects.slice(0, limit) : projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};