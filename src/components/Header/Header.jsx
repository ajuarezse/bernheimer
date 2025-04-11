import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        <a href="#home" className="header__logo">
          Alan Bernheimer
        </a>
        <nav className="header__nav">
          <a href="#about" className="header__nav-link">
            About Me
          </a>
          <a href="#projects" className="header__nav-link">
            Projects
          </a>
          <a href="#photos" className="header__nav-link">
            Photos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
