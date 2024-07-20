import React from "react";

const NavbarSearch = ({ onClose, isScrolled }) => {
  const navbarSearchStyle = isScrolled
    ? {
        height: "60px",
        transition: "all 0.3s ease-in-out",
      }
    : {
        height: "100px",
        transition: "all 0.3s ease-in-out",
      };

  return (
    <div
      className="fixed top-0 left-0 w-full bg-[#341A79] text-white z-50 flex items-center justify-center"
      style={navbarSearchStyle}
    >
      <div className="relative w-full max-w-3xl px-4 py-2">
        <input
          type="text"
          className="w-full py-2 px-4 bg-transparent border-b border-white placeholder-white focus:outline-none"
          placeholder="Search Your Desired Destinations or Events"
        />
        <button
          onClick={onClose}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarSearch;
