export const siteUrl = "https://xuqssq.com";
export const title = "Qian Xu";
export const description =
  "I'm a software engineer based in Guangzhou, China. A detail-oriented developer who loves crafting pixel-perfect interfaces and building tools that make everyday tasks a breeze.";

export const jobTitle = "Software Engineer";
export const email = "xuqssq@gmail.com";
export const githubUrl = "https://github.com/xuqssq";
export const profileImage = "/pfp_t.webp";
export const resumePath = "/resume.pdf";

export const socialLinks = {
  github: githubUrl,
  email: `mailto:${email}`,
};

export const address = {
  addressRegion: "GD",
  addressCountry: "CN",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#opensource" },
  { label: "Skills", href: "#skills" },
];

export const workExperiences = [
  {
    company: "Bandian Tech",
    position: "Full Stack Developer",
    period: "Apr 2024 — Current",
    logoSrc: "/work/bd.webp",
    logoAlt: "Bandian Tech logo",
    description:
      "Building AI-powered fintech products using Next.js. Responsible for end-to-end development of trading platforms and financial analytics tools.",
    companyUrl: "https://beststock.ai",
  },
  {
    company: "9Air",
    position: "Software Engineer",
    period: "Apr 2023 — Apr 2024",
    logoSrc: "/work/9air.png",
    logoAlt: "9Air logo",
    description:
      "Developed and maintained internal OA systems to streamline business operations and improve workflow efficiency across departments.",
    companyUrl: "https://www.9air.com/zh-CN",
  },
];

export const projects = [
  {
    name: "APIPass",
    description:
      "An AI-powered API aggregation platform. Connect to any API instantly. Discover, integrate, and manage thousands of APIs in one unified marketplace.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Cloudflare",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "https://apipass.dev",
    period: "Constant",
  },
  {
    name: "BestStock AI",
    description:
      "AI-powered stock analysis tool for U.S. stocks, offering institutional-grade data and insights to help you invest smarter.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Docker",
      "Supabase",
      "Cloudflare",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "https://beststock.ai",
    monthlyVisits: "7.67K",
    period: "Constant",
  },
  {
    name: "MakeBestMusic",
    description:
      "AI music generator that creates high-quality songs from text prompts. Features music splitting, mixing, enhancement, and audio restoration for musicians and creators.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Turborepo",
      "Docker",
      "Supabase",
      "Cloudflare",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "https://makebestmusic.com",
    monthlyVisits: "379.97K",
    period: "2025",
  },
  {
    name: "DICloak",
    description:
      "Anti-detect browser for managing multiple accounts with maximum anonymity. Offers anti-detection, account protection, and scalable business growth solutions.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Docker",
      "Supabase",
      "Cloudflare",
      "Vercel",
      "Shadcn UI",
    ],
    liveUrl: "https://dicloak.com",
    monthlyVisits: "652.16K",
    period: "2025",
  },
];

export const openSourceContributions = [
  {
    name: "next-intl",
    projectDescription:
      "Internationalization (i18n) for Next.js that gets out of your way.",
    contributionDescription:
      "Contributed bug fixes and documentation improvements to the popular Next.js internationalization library.",
    githubUrl: "https://github.com/amannn/next-intl",
    forkUrl: "https://github.com/xuqssq/next-intl",
  },
  {
    name: "M3U8Keeper",
    projectDescription:
      "A Chrome extension for capturing and downloading M3U8 video streams from web pages.",
    contributionDescription:
      "Author. Built a browser extension with 400+ daily active users that automatically detects and saves HLS video streams.",
    githubUrl: "https://github.com/xuqssq/M3U8Keeper",
    chromeUrl:
      "https://chromewebstore.google.com/detail/m3u8-keeper/coecbepngabeoadjoeknabnhnpegmdbl?hl=en",
  },
  {
    name: "q-image-compressor",
    projectDescription:
      "A smart image batch compression tool supporting JPG, PNG, WebP, GIF, and AVIF formats.",
    contributionDescription:
      "Author. Created an efficient CLI tool and Node.js library that intelligently compresses images while maintaining quality.",
    githubUrl: "https://github.com/xuqssq/image-compress",
  },
  {
    name: "Chinese Calendar",
    projectDescription:
      "A data collection tool for Chinese calendar data including lunar dates, festivals, and auspicious days.",
    contributionDescription:
      "Author. Built a scraper that exports RFC 5545 ICS format, compatible with Apple Calendar, Google Calendar, and Outlook.",
    githubUrl: "https://github.com/xuqssq/calendar",
  },
  {
    name: "12306 Search MCP",
    projectDescription:
      "An MCP server for querying China Railway 12306 train tickets, enabling AI assistants to search train schedules.",
    contributionDescription:
      "Author. Developed an MCP-based service supporting ticket queries, transfer searches, and station lookups for Claude, Cursor, etc.",
    githubUrl: "https://github.com/xuqssq/12306-search",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "/skills/reactjs.svg" },
      { name: "React Native", icon: "/skills/react-native.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "TailwindCSS", icon: "/skills/tailwindcss.svg" },
      { name: "Vite", icon: "/skills/vitejs.svg" },
      { name: "tRPC", icon: "/skills/trpc.svg" },
      { name: "Electron", icon: "/skills/electron.svg" },
      { name: "Shadcn UI", icon: "/skills/shadcn.svg", darkIcon: true },
      { name: "Motion", icon: "/skills/motion.svg" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "/skills/node.svg" },
      { name: "NestJS", icon: "/skills/nestjs.svg" },
      { name: "Prisma", icon: "/skills/prisma.svg", darkIcon: true },
      { name: "Supabase", icon: "/skills/supabase-icon.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Strapi", icon: "/skills/strapi.svg" },
      { name: "Puppeteer", icon: "/skills/puppeteer.svg" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Nginx", icon: "/skills/nginx.svg" },
      { name: "Turborepo", icon: "/skills/turborepo.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
      { name: "Webpack", icon: "/skills/webpack.svg" },
      { name: "npm", icon: "/skills/npm.svg" },
      { name: "Yarn", icon: "/skills/yarn.svg" },
      { name: "pnpm", icon: "/skills/pnpm.svg" },
      { name: "Bun", icon: "/skills/bun.svg" },
      { name: "Prettier", icon: "/skills/prettier.svg" },
      { name: "Ngrok", icon: "/skills/ngrok.svg", darkIcon: true },
    ],
  },
  {
    name: "Cloud & Services",
    skills: [
      { name: "Vercel", icon: "/skills/vercel.svg", darkIcon: true },
      { name: "Cloudflare", icon: "/skills/cloudflare.svg" },
      { name: "Stripe", icon: "/skills/stripe.svg" },
      { name: "Clerk", icon: "/skills/clerk.svg" },
      { name: "OpenRouter", icon: "/skills/openrouter.svg" },
    ],
  },
  {
    name: "AI",
    skills: [
      { name: "Claude", icon: "/skills/claude.svg", darkIcon: true },
      { name: "OpenAI", icon: "/skills/openai.svg" },
      { name: "AI SDK", icon: "/skills/vercel.svg", darkIcon: true },
      { name: "Claude Code", icon: "/skills/claude.svg" },
      { name: "Cursor", icon: "/skills/cursor.svg", darkIcon: true },
      { name: "OpenCode", icon: "/skills/opencode.svg" },
    ],
  },
  {
    name: "Libraries",
    skills: [
      { name: "React Query", icon: "/skills/react-query.svg" },
      { name: "Lodash", icon: "/skills/lodash.svg" },
    ],
  },
];
