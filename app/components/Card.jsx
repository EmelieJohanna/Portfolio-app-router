import Button from "./Button";

function Card({ title, description, hrefVercel, hrefGit }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md shadow-shadow p-4 text-text border-shadow border">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="">{description}</p>
      <div className="mt-4 flex space-x-4">
        {hrefVercel && (
          <Button href={hrefVercel} target="_blank" rel="noopener noreferrer">
            View with Vercel
          </Button>
        )}
        {hrefGit && (
          <Button href={hrefGit} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Button>
        )}
      </div>
    </div>
  );
}

export default Card;
