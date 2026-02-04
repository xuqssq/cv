import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { siteUrl, title, description } from "@/constants";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">

      <Image src="/pfp.webp" alt={title} width={100} height={100} className="rounded-lg" priority />
      <h1 className="text-3xl font-bold font-celine text-black dark:text-white">{title}</h1>

      <p className="text-base text-gray-900 dark:text-gray-100">
        Welcome to my corner of the internet. {description}
      </p>
      <div className="flex flex-row gap-3">
        <Link className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 p-1 rounded-lg text-black dark:text-white" target="_blank" href="https://github.com/xuqssq">
          <FaGithub className="size-6" />
        </Link>
        <Link className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 p-1 rounded-lg text-black dark:text-white" href="mailto:xuqssq@gmail.com">
          <MdEmail className="size-6" />
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-2 py-1 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg font-medium"
          rel="noopener noreferrer"
        >
          <span>View CV</span>
          <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}