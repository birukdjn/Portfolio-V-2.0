# 🚀 Modern Dev Portfolio | Next.js 16 & Turbopack

A high-performance, Git-inspired professional portfolio and blog featuring a unique **Terminal-style UI**, real-time **GitHub API integration**, and smooth motion design.  
Built for developers who value **clean architecture, performance, and aesthetics**.

---

## 🌐 Live Demo

- 🔗 **Live Site:** https://Birukdjn.vercel.app  
- 📦 **Repository:** https://github.com/Birukdjn/portfolio-v2  
- ⚡ **Performance:** 100% Lighthouse score

---

## ✨ Key Features

- 🖥 **Terminal-Inspired Interface**  
  Git-style logs, commits, and command-line aesthetics

- 🐙 **GitHub API Integration**  
  Live repositories, contributions, stars, and commits

- ⚡ **Performance First**  
  Turbopack-enabled builds, dynamic imports, optimized images

- 🎨 **Modern UI & Animations**  
  Tailwind CSS, Framer Motion, glassmorphism effects

- 📱 **Fully Responsive**  
  Works seamlessly on desktop, tablet, and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|-----|-----------|
| Framework | Next.js 16 (App Router) |
| Bundler | Turbopack |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| API | GitHub REST API |
| Deployment | Vercel |

---

## 📂 Project Structure

```bash
├── public/
│   ├── certifications/        # Certification images
│   └── projects/              # Project screenshots & assets
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/
│   │   │   └── contributions/
│   │   │       └── route.js   # GitHub contributions API
│   │   ├── blogs/
│   │   │   └── page.js
│   │   ├── certifications/
│   │   │   └── page.js
│   │   ├── page.js            # Home page
│   │   ├── layout.js          # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico
│   │
│   ├── components/            # Reusable UI components
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   ├── terminalIntro.jsx
│   │   ├── rootclient.jsx
│   │   └── seo-config.jsx
│   │
│   ├── Data/                  # Centralized content data
│   │   ├── blogsdata.js
│   │   ├── certificatesdata.js
│   │   ├── experiencedata.js
│   │   ├── manualprojects.js
│   │   ├── projectsdata.js
│   │   └── skillsdata.js
│   │
│   └── pages/                 # Section-based UI components
│       ├── hero.jsx
│       ├── about.jsx
│       ├── skills.jsx
│       ├── projects.jsx
│       ├── experience.jsx
│       ├── blogs.jsx
│       └── contact.jsx
│
├── next.config.mjs             # Next.js & Turbopack config
└── tailwind.config.js          # Tailwind theme & animations
 ```
## 📡 API Integration

### 🐙 GitHub Contributions API

The portfolio uses a custom **Next.js API route** to fetch real-time GitHub data:

## /api/contributions

This endpoint provides:
- GitHub contribution statistics
- Repository stars and forks
- Commit activity and recent updates

The API layer keeps external logic isolated while ensuring fast, secure data access.

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Birukdjn/portfolio-v2.git
cd portfolio-v2
npm install
```
## Environment Variables (Optional)

For higher GitHub API rate limits, create a .env.local file:

```bash
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```
## Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

## ⚙️ Customization Guide

### Update portfolio content easily from the centralized Data folder:

- Projects: src/Data/projectsdata.js

- Experience: src/Data/experiencedata.js

- Skills: src/Data/skillsdata.js

- Blogs: src/Data/blogsdata.js

### Certifications

- Data: src/Data/certificatesdata.js

- Images: public/certifications/

No database required — all content is data-driven and easy to maintain.

## 🧠 Architecture Notes

- App Router used for routing and layout management

- Data-driven sections powered by the centralized Data directory

- Client-heavy components isolated for optimal performance

- SEO configuration handled via seo-config.jsx

## 🤝 Contributing

This is a personal portfolio, but contributions are welcome.

1. Fork the repository

2. Create a feature branch:

    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes

4. Push to your branch and open a Pull Request

## 📄 License

- Licensed under the MIT License.
- You are free to use this project as a base for your own portfolio.
- Attribution is appreciated.

# 👤 Author

### Biruk Dejene
Built with 💻 and ☕
linkedin: https://linkedin.com/in/birukdjn

GitHub: https://github.com/Birukdjn

Portfolio: https://birukdjn.vercel.app
