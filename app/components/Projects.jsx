import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "This Portfolio",
    description: "Made with Next.js app router.",
    hrefVercel:
      "https://react-clock-3eh2s0123-emeliejohannas-projects.vercel.app/",
    hrefGit:
      "https://react-clock-3eh2s0123-emeliejohannas-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Todo List Redux",
    description:
      "A project that lets you add/remove and check of finnished tasks. Made with Next.js pages router and redux toolkit.",
    hrefVercel: "https://todolist-redux-five.vercel.app/",
    hrefGit: "https://github.com/EmelieJohanna/todolist-redux.git",
  },
  {
    id: 3,
    title: "Worldwide Digital Clocks + Timers Library",
    description: "Made with Vite and React.js.",
    hrefVercel:
      "https://react-clock-3eh2s0123-emeliejohannas-projects.vercel.app/",
    hrefGit:
      "https://react-clock-3eh2s0123-emeliejohannas-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description:
      "Guess the number between 1-100. My first app using React Native and Expo.",
    hrefGit: "https://github.com/EmelieJohanna/React-Native-GuessingGame.git",
  },
  {
    id: 5,
    title: "Apple Quiz",
    description:
      "This is a quiz app made with my crew that lets you add/remove your own questions. Made with Next.js.",
    hrefGit: "https://github.com/EmelieJohanna/quiz-redux.git",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className=" text-center font-bold text-text">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            hrefVercel={project.hrefVercel}
            hrefGit={project.hrefGit}
          />
        ))}
      </div>
    </>
  );
}
