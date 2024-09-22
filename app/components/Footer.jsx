import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import EasterEggBtn from "./EasterEggBtn";
import Button from "./Button";
import { GoArrowDownLeft } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-transparent p-10 text-text2">
      <div>
        <h3 className="ml-6 text-highlight ">
          Click me!
          <GoArrowDownLeft />
        </h3>
        <EasterEggBtn />
      </div>
      <div className="flex m-4 justify-center space-x-4">
        <Button
          href="https://www.linkedin.com/in/emelie-lundberg-jo/"
          onClick={() => console.log("connect")}
        >
          <FaLinkedin /> LinkedIn
        </Button>

        <Button
          href="https://github.com/EmelieJohanna"
          className=""
          onClick={() => console.log("connect")}
        >
          <FaGithub /> Github
        </Button>
        <Button
          href="mailto:emelie.lundberg42@gmail.com"
          className=""
          onClick={() => console.log("connect")}
        >
          <MdMailOutline /> Mail
        </Button>
      </div>
      {/* <Link
        href="https://github.com/EmelieJohanna"
        className="text-slate-70 hover:text-slate-900 flex justify-center p-4"
      >
        <FaGithub />
      </Link> */}
      <div className="flex justify-center text-accent">
        &copy; {new Date().getFullYear()} Emelie Johanna Group. All rights
        reserved.
      </div>
    </footer>
  );
}
