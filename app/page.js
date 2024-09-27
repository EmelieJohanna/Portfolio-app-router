"use client";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillDisplay from "./components/SkillDisplay";
import ProjectsDisplay from "./components/ProjectsDisplay";
import Cube from "./components/Cube";
import BackToTopButton from "./components/BackToTop";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10`}
    >
      <Hero />
      <AboutMe />
      <SkillDisplay classname="mb-20 md:m-28" />
      <ProjectsDisplay />
      <div className="m-20">
        <Cube />
      </div>
      <BackToTopButton />
    </main>
  );
}
