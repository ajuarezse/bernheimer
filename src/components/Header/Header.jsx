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
          <NavLink to="/about" className="header__nav-link">
            About
          </NavLink>
          <NavLink to="/poetry" className="header__nav-link">
            Poetry
          </NavLink>
          <NavLink to="/prose" className="header__nav-link">
            Prose
          </NavLink>
          <NavLink to="/reviews" className="header__nav-link">
            Reviews
          </NavLink>
          <NavLink to="/translations" className="header__nav-link">
            Translations
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
