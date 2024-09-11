import Card from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <h2 className=" text-center font-bold text-text">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            mockup={project.mockup}
            description={project.description}
            hrefVercel={project.hrefVercel}
            hrefGit={project.hrefGit}
          />
        ))}
      </div>
    </>
  );
}
