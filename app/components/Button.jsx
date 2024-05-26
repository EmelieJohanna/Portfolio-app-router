export default function Button({ children, href, onClick, classname = "" }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-secondary text-text rounded-3xl hover:bg-secondary active:bg-highlight transition-colors flex max-w-max py-2 px-5 items-center ${classname}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={` border-2 border-accent text-text rounded-md hover:bg-secondary active:bg-highlight transition-colors py-2 px-5  ${classname}`}
    >
      {children}
    </button>
  );
}
