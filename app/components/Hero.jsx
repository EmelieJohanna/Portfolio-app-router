import Avatar from "./Avatar";
import Button from "./Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Hero() {
  return (
    <section className="bg-transparent text-text items-center py-12">
      <div className="grid md:grid-cols-2 ">
        <div className="flex justify-center place-content-center items-center mb-10 md:mb-0">
          <Avatar className="slide-in" />
        </div>
        <div>
          {/* <div xs={12} md={6} xl={7}> */}
          <div className="font-xl ">
            <h1 className="font-bold text-4xl block my-4">
              Hi, I'm Emelie
              <span className="text-gradient block">Fullstack Developer.</span>
            </h1>
            <div className="flex space-x-4 mb-10">
              <Button
                href="mailto:emelie.lundberg42@gmail.com"
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
            <p className="wrap">
              A Curious Fullstack Dev Student With Too Many Hobbies.
            </p>
            <p className="my-4">
              This website was built with React. Visit my{" "}
              <span href="https://github.com/EmelieJohanna">Github </span>
              page to see the source code and other projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
