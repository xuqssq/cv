import Link from "next/link";

const projects = [
  {
    name: "APIPass",
    description: "An AI-powered API aggregation platform. Connect to any API instantly. Discover, integrate, and manage thousands of APIs in one unified marketplace.",
    techStack: ["Next.js", "TailwindCSS", "Supabase", "Cloudflare", "Vercel", "Shadcn UI"],
    liveUrl: "https://apipass.dev",
    period: "Constant",
  },
  {
    name: "BestStock AI",
    description: "AI-powered stock analysis tool for U.S. stocks, offering institutional-grade data and insights to help you invest smarter.",
    techStack: ["Next.js", "TailwindCSS", "Docker", "Supabase", "Cloudflare", "Vercel", "Shadcn UI"],
    liveUrl: "https://beststock.ai",
    monthlyVisits: "7.67K",
    period: "Constant",
  },
  {
    name: "MakeBestMusic",
    description: "AI music generator that creates high-quality songs from text prompts. Features music splitting, mixing, enhancement, and audio restoration for musicians and creators.",
    techStack: ["Next.js", "TailwindCSS", "Turborepo", "Docker", "Supabase", "Cloudflare", "Vercel", "Shadcn UI"],
    liveUrl: "https://makebestmusic.com",
    monthlyVisits: "379.97K",
    period: "2025",
  },
  {
    name: "DICloak",
    description: "Anti-detect browser for managing multiple accounts with maximum anonymity. Offers anti-detection, account protection, and scalable business growth solutions.",
    techStack: ["Next.js", "TailwindCSS", "Docker", "Supabase", "Cloudflare", "Vercel", "Shadcn UI"],
    liveUrl: "https://dicloak.com",
    monthlyVisits: "652.16K",
    period: "2025",
  },
];

function formatVisits(visits) {
  return visits;
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-black dark:text-white">Projects</h2>
      </div>
      <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700 divide-dashed">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 group py-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-base font-semibold text-black dark:text-white transition-colors leading-tight">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-700 dark:decoration-gray-400 transition-all ease-in-out transform duration-200"
                  >
                    {project.name}
                  </Link>
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.monthlyVisits && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{formatVisits(project.monthlyVisits)} / month</span>
                </div>
              )}
              <div className="text-xs text-gray-500 dark:text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                {project.period}
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Visit Website</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
