"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import ThemeBtn from "./ThemeBtn";
import Logo from "./Logo";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close nav if clicking outside of nav
  useEffect(() => {
    const closeNav = (event) => {
      if (isNavOpen && !event.target.closest(".nav-container")) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", closeNav);
    return () => document.removeEventListener("click", closeNav);
  }, [isNavOpen]);

  const scrollToSection = (yCoord) => {
    window.scrollTo({
      top: yCoord,
      behavior: "smooth",
    });
    toggleNav();
  };

  return (
    <div className="sticky top-0 bg-background3 flex justify-between items-center p-4 text-text z-50">
      {/* Container for Logo and Hamburger Menu */}
      {/* <div className="flex items-center space-x-4"> */}
      {/* Logo */}
      <Logo />
      {/* Hamburger Menu (for mobile) */}
      <div className="sm:hidden flex items-center">
        {/* LOOOOKS GOOOD!!!!!!!!!!!!111111111 */}
        <button onClick={toggleNav} className="font-extrabold">
          {isNavOpen ? (
            <RxCross1 size="2rem" className="text-text" />
          ) : (
            <CiMenuBurger size="2rem" className="text-text" />
          )}
        </button>
      </div>
      {/* </div> */}

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex p-2 space-x-4 items-center font-bold">
        <button
          onClick={() => scrollToSection(500)}
          className="hover:text-accent hover:underline"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection(1000)}
          className="hover:text-accent hover:underline "
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection(1400)}
          className="hover:text-accent hover:underline"
        >
          Projects
        </button>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-2">
          <Link href="https://github.com/EmelieJohanna">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/emelie-lundberg-jo/">
            <FaLinkedin />
          </Link>
          <ThemeBtn />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`${isNavOpen ? "translate-x-0" : "translate-x-full"}
                    fixed bg-background3 right-0 top-20 w-full h-full transition-transform  p-6 pt-20
                    flex flex-col space-y-14 sm:hidden z-40 ease-in-out duration-500 text-3xl`}
      >
        <button
          className="flex gap-2 items-center font-semibold hover:text-accent hover:underline"
          onClick={() => scrollToSection(700)}
        >
          <FaUser />
          About Me
        </button>
        <button
          className="flex gap-2 items-center font-semibold hover:text-accent hover:underline"
          onClick={() => scrollToSection(1200)}
        >
          <FaCode />
          Skills
        </button>
        <button
          className="flex gap-2  items-center font-semibold hover:text-accent hover:underline"
          onClick={() => scrollToSection(1850)}
        >
          <FaProjectDiagram />
          Projects
        </button>{" "}
        {/* Social Icons and Theme Button */}
        <div className="flex items-center space-x-4 mt-10">
          <Link href="https://github.com/EmelieJohanna">
            <FaGithub size="2rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/emelie-lundberg-jo/">
            <FaLinkedin size="2rem" />
          </Link>
        </div>{" "}
        <ThemeBtn />
      </div>
    </div>
  );
}
