import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className="header">
      <div
        className={`header__grid ${
          !isHomePage ? "header__grid--with-nav" : ""
        }`}
      >
        <NavLink
          to="/"
          className={`header__logo ${
            isHomePage ? "header__logo--centered" : "header__logo--with-nav"
          }`}
        >
          Adam Berneruner
        </NavLink>
        <nav
          className={`header__nav ${
            isHomePage ? "header__nav--hidden" : "header__nav--visible"
          }`}
        >
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
