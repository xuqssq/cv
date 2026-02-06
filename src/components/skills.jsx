import Image from "next/image";
import { skillCategories } from "@/constants";

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
