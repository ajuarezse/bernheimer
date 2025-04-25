import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        <NavLink to="/" className="header__logo">
          AB
        </NavLink>
        <nav className="header__nav">
          <a href="#about" className="header__nav-link">
            Link
          </a>
          <a href="#projects" className="header__nav-link">
            Link
          </a>
          <a href="#photos" className="header__nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
