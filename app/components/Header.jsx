import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
import Logo from "./Logo";

export default function () {
  console.log("Rendering Header...");
  return (
    <div className="flex bg-transparent justify-between p-4 text-text">
      <nav
        className="flex p-2 space-x-4 items-center 
      "
      >
        <Logo />
        <Link href="#" className="hover:text-accent hover">
          Home
        </Link>
        <Link href="#" className="hover:text-accent hover">
          Projects
        </Link>
        <Link href="#" className="hover:text-accent hover">
          Skills
        </Link>
        <Link href="#" className="hover:text-accent hover">
          About Me
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Link href="https://github.com/EmelieJohanna">
          <FaGithub />
        </Link>
        <Link href="https://github.com/EmelieJohanna">
          <FaLinkedin />
        </Link>
        <ThemeBtn />
      </div>
    </div>
  );
}
