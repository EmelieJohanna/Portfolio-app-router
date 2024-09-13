"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <div className="sticky top-0 bg-background1 flex justify-between items-center p-4 text-text">
      {/* Container for Logo and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Logo />
        {/* Hamburger Menu (for mobile) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleNav} className="font-extrabold">
            {isNavOpen ? (
              <RxCross1 size="28px" className="text-text" />
            ) : (
              <CiMenuBurger size="28px" className="text-text" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex p-2 space-x-4 items-center">
        <Link
          href="#"
          onClick={() => scrollToSection(0)}
          className="hover:text-accent"
        >
          Home
        </Link>
        <Link
          href="#"
          onClick={() => scrollToSection(500)}
          className="hover:text-accent"
        >
          Skills
        </Link>
        <Link
          href=""
          onClick={() => scrollToSection(1000)}
          className="hover:text-accent"
        >
          Projects
        </Link>
        {/* <Link href="#" className="hover:text-accent">
          About Me
        </Link> */}
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`${isNavOpen ? "translate-x-0" : "-translate-x-full"}
                    fixed inset-y-0 left-0 w-64 transition-transform bg-white p-5
                    flex flex-col space-y-3 sm:hidden z-40`}
      >
        <Link
          href=""
          className="hover:text-accent"
          onClick={() => scrollToSection(0)}
        >
          Home
        </Link>
        <Link
          href=""
          className="hover:text-accent"
          onClick={() => scrollToSection(600)}
        >
          Skills
        </Link>
        <Link
          href=""
          className="hover:text-accent"
          onClick={() => scrollToSection(1200)}
        >
          Projects
        </Link>

        {/* <Link href="" className="hover:text-accent" onClick={toggleNav}>
          About Me
        </Link> */}
      </div>

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
    </div>
  );
}
