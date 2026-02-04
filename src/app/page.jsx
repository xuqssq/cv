import Hero from "@/components/hero";
import WorkExperience from "@/components/work";
import Education from "@/components/education";
import Projects from "@/components/projects";
import OpenSourceContributions from "@/components/open-source";
import Navigation from "@/components/navigation";
import BackToTop from "@/components/back-to-top";
import { siteUrl, title, description } from "@/constants";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: title,
  url: siteUrl,
  image: `${siteUrl}/pfp.webp`,
  jobTitle: "Software Engineer",
  description,
  sameAs: [
    "https://github.com/xuqssq",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "GD",
    addressCountry: "CN",
  },
};

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navigation />
      <main className="flex min-h-screen flex-col mx-auto text-black dark:text-white m-10 max-w-3xl gap-4 px-4 lg:px-0">
        <Hero />
        <section id="work">
          <WorkExperience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="opensource">
          <OpenSourceContributions />
        </section>
      </main>
      <BackToTop />
    </>
  );
}
