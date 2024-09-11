"use client";

import Hero from "./components/Hero";
import ProjectsDisplay from "./components/ProjectsDisplay";
import Head from "next/head";
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
      <Head>
        <title>My Coding Portfolio</title>
        <meta
          name="description"
          content="My coding portfolio build with Next.js, React, and Tailwind CSS"
        />
      </Head>

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
