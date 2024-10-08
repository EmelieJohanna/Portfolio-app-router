import Button from "./Button";

function ProjectCard({
  title,
  description,
  mockup,
  hrefVercel,
  hrefGit,
  youtubeLink,
}) {
  return (
    <div className="rounded overflow-hidden shadow-md shadow-shadow p-12 text-text border-shadow border flex flex-col place-content-center md:flex-row md:items-center md:gap-8 max-w-4xl">
      {/* Media Section */}
      <div className="flex-shrink-0 flex justify-center md:w-80">
        {youtubeLink ? (
          <iframe
            width="140"
            height="250"
            src={youtubeLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          mockup && (
            <img
              src={mockup}
              alt={`mockup of ${mockup}`}
              className="w-[320px] h-auto hover:scale-110 transition-transform duration-300"
            />
          )
        )}
      </div>

      {/* Content Section */}
      <div className="mt-4 lg:mt-0 lg:ml-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="mb-2">{description}</p>
        </div>

        {/* Buttons Section */}
        <div className="mt-4 flex flex-row gap-4">
          {hrefVercel && <Button href={hrefVercel}>View Project</Button>}
          {hrefGit && <Button href={hrefGit}>View on GitHub</Button>}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
