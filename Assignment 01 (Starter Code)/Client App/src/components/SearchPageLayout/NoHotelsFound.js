import React from "react";

const NoHotelsFound = ({ className }) => {
  return (
    <div className={`text-center items-center box-content ${className} `}>
      <h2 className="text-3xl font-bold text-gray-200">
        No hotels found
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 ml-2 mb-1 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </h2>
      <p className="text-gray-200 text-md">
        Try adjusting your search criteria.
      </p>
    </div>
  );
};

export default NoHotelsFound;
