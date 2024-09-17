"use client";

import Hero from "./components/Hero";
import ProjectsDisplay from "./components/ProjectsDisplay";
import { useTheme } from "@/contexts/ThemeContext";
import SkillDisplay from "./components/SkillDisplay";
import Cube from "./components/Cube";
import BackToTopButton from "./components/BackToTop";

export default function Home() {
  const { state } = useTheme();
  return (
    <div
      className={`
     min-h-screen  ${
       state.userPreferences.theme === "dark"
         ? "dark"
         : state.userPreferences.theme === "pink"
         ? "pink"
         : ""
     }`}
    >
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10`}
      >
        <Hero />
        <SkillDisplay classname="mb-20 md:m-28" />
        <ProjectsDisplay />
        <div className="m-20">
          <Cube />
        </div>
        <BackToTopButton />
      </main>
    </div>
  );
}
