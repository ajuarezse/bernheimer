import "./Button.css";

function Button({ href, onClick, disabled, children, external }) {
  if (disabled) {
    return <span className="button button--disabled">{children}</span>;
  }

  if (href) {
    return (
      <a
        href={href}
        className="button"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
