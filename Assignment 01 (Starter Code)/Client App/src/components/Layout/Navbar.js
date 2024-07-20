import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Menu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import { logoutThunk } from "../../features/auth/authThunks"; // Import logout action

const Navbar = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = isScrolled
    ? {
        backgroundColor: "rgba(33, 37, 41, 0.8)",
        height: "60px",
        transition: "all 0.3s ease-in-out",
      }
    : {
        backgroundColor: "transparent",
        height: "100px",
        transition: "all 0.3s ease-in-out",
      };

  const containerStyle = isScrolled ? { padding: "0" } : { padding: "20px 0" };

  const textStyle = isScrolled
    ? { transform: "scale(0.8)", transition: "transform 0.3s ease-in-out" }
    : { transform: "scale(1)", transition: "transform 0.3s ease-in-out" };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#7643ea]"
      : "text-white hover-text-purple transition-all duration-300";
  };

  return (
    <div>
      <nav
        style={navbarStyle}
        className={`fixed top-0 left-0 w-full z-50 ${className}`}
      >
        <div
          style={containerStyle}
          className="container-fluid mx-auto px-4 flex justify-between items-center"
        >
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center ml-5 md:mr-0 lg:mr-10">
              <div
                style={textStyle}
                className="text-2xl md:text-2xl lg:text-3xl font-bold text-white transition-all duration-300"
              >
                <span className="tracking-widest">BOOKING</span>
              </div>
              <div
                style={textStyle}
                className="text-sm text-white ml-2 transition-all duration-300"
              >
                Directory & Listing
              </div>
            </div>
          </div>

          <div className="text-[0.8rem] hidden md:flex gap-5 md:mr-5 lg:mr-40">
            <a href="/" className={getNavLinkClass("/")}>
              Home
            </a>
            <a href="/search" className={getNavLinkClass("/search")}>
              Explore
            </a>
            {user && (
              <a
                href="/transaction"
                className={getNavLinkClass("/transaction")}
              >
                Transactions
              </a>
            )}
            <a href="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-[0.7rem] hidden md:flex items-center space-x-8 justify-end mr-10">
            <button
              onClick={openSearch}
              className="text-white hover-text-purple flex items-center space-x-1 focus:outline-none transition-all duration-300"
            >
              <span>🔍</span>
              <span>Search</span>
            </button>
            {user ? (
              <div className="flex gap-8">
                <button
                  onClick={handleLogout}
                  className="text-white hover-text-purple flex items-center space-x-1 focus:outline-none transition-all duration-300"
                >
                  Logout
                </button>
                <div
                  className="flex flex-col text-white p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(67, 25, 161, 0.65)" }}
                >
                  <div>Welcome back</div>
                  <span className="text-center">{user.userName}</span>
                </div>
              </div>
            ) : (
              <>
                <a href="/auth" className={getNavLinkClass("/auth")}>
                  Sign in or Register
                </a>
                <div
                  className="text-white p-2 rounded-lg"
                  style={{ backgroundColor: "rgba(67, 25, 161, 0.65)" }}
                >
                  Guess
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-4 ml-2 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
        <Menu isMenuOpen={isMenuOpen} onOpenSearch={openSearch} />
      </nav>
      {isSearchOpen && (
        <NavbarSearch onClose={closeSearch} isScrolled={isScrolled} />
      )}
    </div>
  );
};

export default Navbar;
