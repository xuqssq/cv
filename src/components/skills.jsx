import Image from "next/image";

const skillCategories = [
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

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-black dark:text-white">Skills</h2>
      </div>
      <div className="flex flex-col gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={20}
                    height={20}
                    className={`w-5 h-5 object-contain ${skill.darkIcon ? "dark:invert" : ""}`}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
