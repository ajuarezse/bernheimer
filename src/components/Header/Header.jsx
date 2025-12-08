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
          Alan Bernheimer
        </NavLink>
        <nav
          className={`header__nav ${
            isHomePage ? "header__nav--hidden" : "header__nav--visible"
          }`}
        >
          <div className="header__nav-item header__nav-item--dropdown">
            <NavLink to="/about" className="header__nav-link">
              About
            </NavLink>
            <div className="header__dropdown">
              <a href="/about#bio" className="header__dropdown-link">
                Bio
              </a>
              <a
                href="/about#selected-readings"
                className="header__dropdown-link"
              >
                Selected Readings
              </a>
              <a href="/about#pages" className="header__dropdown-link">
                Alan Bernheimer Pages
              </a>
              <a href="/about#photography" className="header__dropdown-link">
                Photography
              </a>
              <a href="/about#contact" className="header__dropdown-link">
                Contact
              </a>
            </div>
          </div>
          <NavLink to="/poetry" className="header__nav-link">
            Poetry
          </NavLink>
          <NavLink to="/prose" className="header__nav-link">
            Prose
          </NavLink>
          <NavLink to="/reviews" className="header__nav-link">
            Reviews & Interviews
          </NavLink>
          <NavLink to="/translations" className="header__nav-link">
            Translation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
