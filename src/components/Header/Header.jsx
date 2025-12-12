import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [navOpen, setNavOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Reset nav to hidden when navigating back to home page
  useEffect(() => {
    if (isHomePage) {
      setNavOpen(false);
    }
  }, [isHomePage]);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      setNavOpen(!navOpen);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div
        className={`header__grid ${
          !isHomePage
            ? "header__grid--with-nav"
            : navOpen
            ? "header__grid--with-nav"
            : ""
        }`}
      >
        <NavLink
          to="/"
          className={`header__logo ${
            isHomePage
              ? navOpen
                ? "header__logo--with-nav"
                : "header__logo--centered"
              : "header__logo--with-nav"
          }`}
          onClick={handleLogoClick}
        >
          Alan Bernheimer
        </NavLink>
        <button
          ref={hamburgerRef}
          className="header__hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
        <nav
          ref={mobileMenuRef}
          className={`header__nav ${
            isHomePage
              ? navOpen
                ? "header__nav--visible"
                : "header__nav--hidden"
              : "header__nav--visible"
          } ${mobileMenuOpen ? "header__nav--mobile-open" : ""}`}
        >
          <NavLink
            to="/"
            className="header__nav-link header__nav-link--home"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <div className="header__nav-item header__nav-item--dropdown">
            <NavLink
              to="/about"
              className="header__nav-link"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
            <div className="header__dropdown">
              <NavLink
                to="/about#bio"
                className="header__dropdown-link"
                onClick={closeMobileMenu}
              >
                Bio
              </NavLink>
              <NavLink
                to="/about#selected-readings"
                className="header__dropdown-link"
                onClick={closeMobileMenu}
              >
                Selected Readings
              </NavLink>
              <NavLink
                to="/about#pages"
                className="header__dropdown-link"
                onClick={closeMobileMenu}
              >
                AB Pages
              </NavLink>
              <NavLink
                to="/about#photography"
                className="header__dropdown-link"
                onClick={closeMobileMenu}
              >
                Photography
              </NavLink>
              <NavLink
                to="/about#contact"
                className="header__dropdown-link"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/poetry"
            className="header__nav-link"
            onClick={closeMobileMenu}
          >
            Poetry
          </NavLink>
          <NavLink
            to="/prose"
            className="header__nav-link"
            onClick={closeMobileMenu}
          >
            Prose
          </NavLink>
          <NavLink
            to="/reviews"
            className="header__nav-link"
            onClick={closeMobileMenu}
          >
            Reviews & Interviews
          </NavLink>
          <NavLink
            to="/translations"
            className="header__nav-link"
            onClick={closeMobileMenu}
          >
            Translation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
