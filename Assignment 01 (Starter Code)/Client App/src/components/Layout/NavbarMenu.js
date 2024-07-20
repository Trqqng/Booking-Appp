import React from "react";

const NavbarMenu = ({ isMenuOpen, onOpenSearch }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="m-4">
      <div className="text-sm md:hidden bg-[#341A79] text-white p-4">
        <a
          href="#"
          className="block px-4 py-2 hover:text-[rgb(118,67,234)] transition-colors duration-500"
        >
          Home
        </a>
        <a
          href="/search"
          className="block w-full text-left px-4 py-2 hover:text-[rgb(118,67,234)] transition-colors duration-500"
        >
          Explore
        </a>
        <a
          href="/search"
          className="block w-full text-left px-4 py-2 hover:text-[rgb(118,67,234)] transition-colors duration-500"
        >
          Listings
        </a>
        <a
          href="#"
          className="block px-4 py-2 hover:text-[rgb(118,67,234)] transition-colors duration-500"
        >
          Contact
        </a>
        <button
          onClick={onOpenSearch}
          className="block px-4 py-2 flex items-center space-x-1 hover:text-[rgb(118,67,234)] transition-colors duration-500"
        >
          <span>🔍</span>
          <span>Search</span>
        </button>
        <a
          href="#"
          className="block px-4 py-2 hover:text-[rgb(118,67,234)] transition-colors duration-300"
        >
          Sign in or Register
        </a>
        <a
          href="#"
          style={{ backgroundColor: "rgb(118, 67, 234)" }}
          className="block text-[0.7rem] text-white px-4 py-2 w-1/4 rounded hover:text-[rgb(118,67,234)] transition-colors duration-300"
        >
          <span className="mr-2">+ Add Listings</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarMenu;
