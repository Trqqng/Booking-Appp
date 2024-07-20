import React from "react";

const SelectCard = ({ icon, title, isVisible, isFullWidth }) => {
  return (
    <div
      className={`rounded-lg text-center text-white p-6 sm:w-24 sm:p-6 sm:mx-2  md:m-2 md:py-12 md:w-36 lg:w-40   transition-all duration-500 ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-96 opacity-0"
      } ${isFullWidth ? "sm:col-span-2" : ""}`}
      style={{ backgroundColor: "#7643ea" }}
    >
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <div className="text-lg sm:text-sm">{title}</div>
    </div>
  );
};

export default SelectCard;
