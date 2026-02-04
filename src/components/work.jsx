import Image from "next/image";
import Link from "next/link";

const workExperiences = [
  {
    company: "Bandian Tech",
    position: "Full Stack Developer",
    period: "Apr 2024 — Current",
    logoSrc: "/work/bd.webp",
    logoAlt: "Bandian Tech logo",
    description: "Building AI-powered fintech products using Next.js. Responsible for end-to-end development of trading platforms and financial analytics tools.",
    companyUrl: "https://beststock.ai"
  },
  {
    company: "9Air",
    position: "Software Engineer",
    period: "Apr 2023 — Apr 2024",
    logoSrc: "/work/9air.png",
    logoAlt: "9Air logo",
    description: "Developed and maintained internal OA systems to streamline business operations and improve workflow efficiency across departments.",
    companyUrl: "https://www.9air.com/zh-CN"
  },
];

export default function Work() {
  return (
    <div className="flex flex-col gap-4 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
      {/* <div className="flex items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Work</h2>
      </div> */}

      <div className="flex flex-col gap-4">
        {workExperiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image
                src={experience.logoSrc}
                alt={experience.logoAlt}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white transition-colors leading-tight">
                    {experience.companyUrl ? (
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-700 dark:decoration-gray-400 transition-all ease-in-out transform duration-200"
                      >
                        {experience.company}
                      </Link>
                    ) : (
                      experience.company
                    )}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-tight">
                    {experience.position}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                  {experience.period}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}