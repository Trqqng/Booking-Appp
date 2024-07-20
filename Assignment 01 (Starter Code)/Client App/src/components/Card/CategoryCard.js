import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="border rounded-lg overflow-hidden w-3/4 mb-5 text-left sm:w-3/4 lg:w-5/6 transition-transform duration-500 transform-opacity hover:scale-105 hover:bg-purple-800">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="ml-3 mb-3">
        <h3 className="text-lg font-bold mt-4">{category.name}</h3>
        <div className="text-[0.7rem]">{category.hotels.length} hotels</div>
      </div>
    </div>
  );
};

export default CategoryCard;
