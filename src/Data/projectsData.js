import { manualProjects } from "./manualProjects";
const PROJECTIMAGES = "/projects/";
const GITHUB_USERNAME = "birukdjn";

const TOKEN = process.env.GITHUB_TOKEN;

const getLanguageColor = (lang) => {
  const colors = {
    "C#": "bg-green-600", "JavaScript": "bg-yellow-400", "TypeScript": "bg-blue-600",
    "Python": "bg-blue-500", "Java": "bg-red-600", "Vue": "bg-emerald-400",
    "HTML": "bg-orange-500", "CSS": "bg-blue-400", "Next.js": "bg-black",
    "React": "bg-sky-400", "Tailwind CSS": "bg-teal-400", "Django": "bg-green-500"
  };
  return colors[lang] || "bg-gray-500";
};


const fetchCommitCount = async (repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/commits?per_page=1`,
      {
        headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
      }
    );
    // The "Link" header contains the total page count when per_page=1
    const linkHeader = response.headers.get("link");
    if (linkHeader) {
      const match = linkHeader.match(/page=(\d+)>; rel="last"/);
      return match ? parseInt(match[1]) : 1;
    }
    return 1;
  } catch {
    return "N/A";
  }
};

export const fetchGitHubProjects = async (limit = null) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
      {
        cache: "no-store",
        headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
      }
    );

    if (!response.ok) throw new Error("GitHub API limit reached or Error");
    const data = await response.json();

    const projectPromises = data.map(async (repo) => {
      const language = repo.language || "Mixed";

      // Fetch commit count for THIS specific repo
      const commitCount = await fetchCommitCount(repo.name);

      return {
        title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        description: repo.description || "A professional project built with modern technologies.",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        size: repo.size, // in KB
        commits: commitCount,
        language: language,
        languageColor: getLanguageColor(language),
        lastCommit: new Date(repo.pushed_at).toLocaleDateString(undefined, {
          month: "short", day: "numeric", year: 'numeric'
        }),
        branch: repo.default_branch,
        status: repo.archived ? "archived" : "active",
        tags: repo.topics.length > 0 ? repo.topics : [language, "Web"].filter(Boolean),
        repoUrl: repo.html_url,
        liveUrl: repo.homepage || `${repo.html_url}/blob/${repo.default_branch}/README.md`,
        images: [`${PROJECTIMAGES}${repo.name.toLowerCase()}.png`],
      };
    });

    const projects = await Promise.all(projectPromises);
    return limit ? projects.slice(0, limit) : projects;

  } catch (error) {
    console.warn("GitHub failed — using manual projects", error);
    return limit ? manualProjects.slice(0, limit) : manualProjects;
  }
};